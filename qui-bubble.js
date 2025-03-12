import { LitElement, html, css } from 'lit';

export class QuiBubble extends LitElement {
  static properties = {
    message: { type: String },
    side: { type: String }, // "left" or "right"
    name: { type: String },
    icon: { type: String },
    typing: { type: Boolean, reflect: true }, // New: Typing indicator
  };

  static styles = css`
    :host {
      display: flex;
      max-width: 100%;
      margin: 8px 0;
    }

    .chat-bubble {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      max-width: var(--chat-bubble-max-width, 60%);
      background: var(--chat-bubble-bg, lightgray);
      color: var(--chat-bubble-color, black);
      padding: var(--chat-bubble-padding, 8px 12px);
      border-radius: var(--chat-bubble-border-radius, 12px);
      box-shadow: var(--chat-bubble-shadow, 0px 4px 8px rgba(0, 0, 0, 0.1));
      transition: var(--chat-bubble-transition, 0.2s ease-in-out);
      word-wrap: break-word;
      min-height: 24px;
    }

    /* Extra padding when typing */
    :host([typing]) .chat-bubble {
      padding: var(--chat-bubble-typing-padding, 8px 16px);
    }

    .chat-bubble:hover {
      box-shadow: var(--chat-bubble-hover-shadow, 0px 6px 12px rgba(0, 0, 0, 0.15));
    }

    :host([side="right"]) {
      align-self: flex-end;
    }

    :host([side="left"]) {
      align-self: flex-start;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
    }

    .name {
      font-size: 0.85rem;
      font-weight: bold;
      margin-bottom: 4px;
      color: var(--chat-bubble-name-color, #444);
    }

    /* Typing Indicator */
    .typing-indicator {
      display: flex;
      gap: 3px;
      align-items: center;
      justify-content: flex-start;
      padding: 4px 8px;
    }

    .dot {
      width: 6px;
      height: 6px;
      background: var(--chat-bubble-typing-dot, #666);
      border-radius: 50%;
      animation: typing 1.5s infinite ease-in-out;
    }

    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }

    .dot:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes typing {
      0%, 100% {
        transform: scale(1);
        opacity: 0.3;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
    }
  `;

  constructor() {
    super();
    this.message = '';
    this.side = 'left';
    this.name = '';
    this.icon = '';
    this.typing = false;
  }

  render() {
    return html`
      <div class="chat-bubble">
        ${this.icon
          ? html`<img src="${this.icon}" alt="Avatar" class="avatar" />`
          : ''}
        <div class="content">
          ${this.name ? html`<div class="name">${this.name}</div>` : ''}
          <div>
            ${this.message 
              ? html`${this.message}`
              : this.typing 
                ? html`
                  <div class="typing-indicator">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </div>
                ` 
                : html`<slot></slot>`}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('qui-bubble', QuiBubble);
