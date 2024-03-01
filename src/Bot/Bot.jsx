import React from "react";
import "./Bot.css"
    
export function Bot({ img, title, children}) {
  return (
    <article data-card>
      <img data-card-img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}