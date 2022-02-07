import { Card } from "../../../model/Types";
import image from "./halloween.png"

export const Halloween: Card = 
{
    title: "my card",
    size: {
      width: 1280,
      height: 720
    },
    backgroundColor: "white",
    elements: [
      {
        elementID: "b3480b5d-a2d8-413a-8b1b-1a09861d9e94",
        type: 1,
        size: {
          width: 1280,
          height: 720
        },
        position: {
          x: 0,
          y: -1
        },
        source: image
      },
      {
        elementID: "d33164b2-4ce5-425e-af32-d3c54908c8df",
        type: 1,
        size: {
          height: 269,
          width: 266
        },
        position: {
          x: 957,
          y: 297
        },
        source: "/static/media/pumpkin.4c9b1e2e.svg"
      },
      {
        elementID: "c868d53a-cc55-4682-9696-3fc1addca3be",
        size: {
          height: 46.22222137451172,
          width: 195.9166717529297
        },
        position: {
          x: 582,
          y: 161
        },
        type: 0,
        textContent: "Halloween!",
        fontSize: 42,
        fontFamily: "serif",
        fontColor: "red"
      }
    ]
  }