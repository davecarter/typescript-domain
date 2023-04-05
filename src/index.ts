import "./styles.css"
import { ownerDocument } from "dom-lib"
import { DomainApp } from "./Domain"
import { config } from "./Domain/config"
type DOMElementType = Element

const domain = DomainApp.create({ config })
const priceDOMElement = document.getElementById("price");
const appDOMElement = document.getElementById("app");

function getElement(id: string): DOMElementType | null {
  const doc = ownerDocument(document.documentElement)
  const element = doc.getElementById(id)
  if (!element) {
    throw new Error(`Element with id '${id}' not found`)
  }
  return element
}

domain.getBTCPriceUseCase.execute({ fiatCurrencyCode: "USD" }).then((response) => {
  console.log("price", response)
  const price = response.bpi
  priceDOMElement ? priceDOMElement.innerHTML = `<div id="price" class="btcPrice"><h1>BTC Price index</h1>${price}</div>` : null
})

const price = "...loading"

appDOMElement ? appDOMElement.innerHTML = `
<div id="price" class="btcPrice">${price}</div>` : null
