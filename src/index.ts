import "./styles.css";
import {ownerDocument}  from "dom-lib";
import { DomainApp } from "./Domain";

type DOMElementType = Element;

const domain = DomainApp.create();

function getElement(id: string): (DOMElementType | null) {
  const doc = ownerDocument(document.documentElement);
  const element = doc.getElementById(id);
  if (!element) {
    throw new Error(`Element with id '${id}' not found`);
  }
  return element;
}


domain.getBTCPriceUseCase.execute({ fiatCurrencyCode: "USD" }).then((response) => {
  console.log("price", response);
  const price = response.bpi;
  getElement("price").innerHTML = `$ ${price}`;
});


const price = "...loading";

getElement("app").innerHTML = `
<h1>BTC Price index</h1>
  <p>
    Getting the current price of Bitcoin in USD from the <a href="https://www.coindesk.com/price/bitcoin">CoinDesk Price Index</a>.
  </p>
<div id="price" class="btcPrice">$ ${price}</div>`;
