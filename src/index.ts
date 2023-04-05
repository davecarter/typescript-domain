import "./styles.css"
import { ownerDocument } from "dom-lib"
import { DomainApp } from "./Domain"
import { config } from "./Domain/config"
type DOMElementType = Element

const domain = DomainApp.create({ config })
const appDOMElement = document.getElementById("app");

domain.getBTCPriceUseCase.execute({ fiatCurrencyCode: "USD" }).then((response) => {
  const priceDOMElement = document.getElementById("price");
  console.log("price", response)
  const price = response.bpi
  priceDOMElement ? priceDOMElement.innerHTML = `<div id="price" class="btcPrice"><h1>BTC Price index</h1>${price}</div>` : null
})

const price = "...loading"

appDOMElement ? appDOMElement.innerHTML = `
<div id="price" class="btcPrice">${price}</div>` : null
