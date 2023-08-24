export default function Product(){

    return {
        item(hit, { html, components, sendEvent }) {
          return html`
            <div>
              <a href="#" onClick="${(e) => {sendEvent('click', hit, 'Product Clicked')}}">
                ${components.Highlight({ attribute: 'name_text_es', hit })}
              </a>
              <br />
              <button onClick="${(e) => {e.stopPropagation();sendEvent('conversion', hit, 'Added To Cart')}}">add to cart</button>
            </div>
          `;
        },
      }
    }
