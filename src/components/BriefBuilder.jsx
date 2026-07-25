import { useMemo, useState } from 'react'
import CONFIG from '../data/config'

const INITIAL_DETAILS = {
  type: '',
  date: '',
  location: '',
  deliverable: '',
  notes: '',
}

export default function BriefBuilder() {
  const [details, setDetails] = useState(INITIAL_DETAILS)
  const [prepared, setPrepared] = useState(false)
  const [copied, setCopied] = useState(false)

  const brief = useMemo(() => {
    const lines = [
      'Hi AuraElevates, I would like to discuss first-person filming.',
      '',
      `Project type: ${details.type || 'Not selected'}`,
      `Date: ${details.date || 'Not confirmed'}`,
      `Location: ${details.location || 'Not confirmed'}`,
      `Content needed: ${details.deliverable || 'I would like guidance'}`,
    ]
    if (details.notes.trim()) lines.push(`Extra detail: ${details.notes.trim()}`)
    return lines.join('\n')
  }, [details])

  const update = (event) => {
    setDetails((current) => ({ ...current, [event.target.name]: event.target.value }))
    setPrepared(false)
    setCopied(false)
  }

  const prepareBrief = (event) => {
    event.preventDefault()
    setPrepared(true)
  }

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="brief-builder">
      <form onSubmit={prepareBrief}>
        <div className="brief-builder__fields">
          <label>
            <span>What are you filming?</span>
            <select name="type" value={details.type} onChange={update} required>
              <option value="">Choose a project type</option>
              <option>Wedding or private event</option>
              <option>Brand or public event</option>
              <option>Hospitality experience</option>
              <option>Walkthrough or training</option>
              <option>Something else</option>
            </select>
          </label>

          <label>
            <span>When is it happening?</span>
            <input name="date" type="date" value={details.date} onChange={update} />
          </label>

          <label>
            <span>Where?</span>
            <input
              name="location"
              type="text"
              value={details.location}
              onChange={update}
              placeholder="Venue, suburb or city"
              autoComplete="address-level2"
            />
          </label>

          <label>
            <span>What do you need delivered?</span>
            <select name="deliverable" value={details.deliverable} onChange={update}>
              <option value="">Choose or ask for guidance</option>
              <option>One highlight film</option>
              <option>Vertical social edits</option>
              <option>Selected clips</option>
              <option>A custom content package</option>
            </select>
          </label>
        </div>

        <label className="brief-builder__notes">
          <span>Anything important?</span>
          <textarea
            name="notes"
            value={details.notes}
            onChange={update}
            rows="3"
            placeholder="Key moments, audience, timing or the feeling you want the film to carry"
          />
        </label>

        <button className="button button--primary brief-builder__prepare" type="submit">
          <span>Prepare my DM</span>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.5 8h9M8.7 4.2l3.8 3.8-3.8 3.8" />
          </svg>
        </button>
      </form>

      {prepared && (
        <div className="brief-builder__result" aria-live="polite">
          <div>
            <p className="micro-label">Your message is ready</p>
            <h3>Copy it, then open Instagram.</h3>
          </div>
          <textarea readOnly value={brief} rows="8" aria-label="Prepared Instagram message" />
          <div className="brief-builder__actions">
            <button className="button button--ghost" type="button" onClick={copyBrief}>
              <span>{copied ? 'Copied' : 'Copy message'}</span>
            </button>
            <a
              className="button button--primary"
              href={CONFIG.contact.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={copyBrief}
            >
              <span>Open Instagram</span>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3.5 8h9M8.7 4.2l3.8 3.8-3.8 3.8" />
              </svg>
            </a>
          </div>
          <p className="brief-builder__privacy">
            Nothing is sent from this page. You choose when to paste and send the message.
          </p>
        </div>
      )}
    </div>
  )
}
