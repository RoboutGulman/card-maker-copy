import { Card } from "../../../model/Types";
import image from "./happyBirthday.jpg"

export const HappyBirthday: Card = 
{
    title: "my card",
    size: {
      width: 1200,
      height: 801
    },
    backgroundColor: "white",
    elements: [
      {
        elementID: "6578df72-57af-43ec-9cbc-14291d6905b3",
        type: 1,
        size: {
          width: 1200,
          height: 801
        },
        position: {
          x: 0,
          y: 0
        },
        source: image
      },
      {
        elementID: "c1b9300b-0924-4481-b3a1-08cb82db80f6",
        type: 1,
        size: {
          height: 262,
          width: 249
        },
        position: {
          x: 927,
          y: 343
        },
        source: "/static/media/cake.ea711e35.svg"
      },
      {
        elementID: "8624fe4d-221a-4908-a277-8f98628aa203",
        type: 1,
        size: {
          height: 306,
          width: 327
        },
        position: {
          x: 57,
          y: 11
        },
        source: "/static/media/cap.1dea0e28.svg"
      },
      {
        elementID: "b567798b-e5bb-41d3-a38e-7566ee69a178",
        size: {
          height: 44.4444465637207,
          width: 318.97222900390625
        },
        position: {
          x: 68,
          y: 401
        },
        type: 0,
        textContent: "C Днём Рождения!",
        fontSize: 40,
        fontFamily: "serif",
        fontColor: "white"
      },
      {
        elementID: "4d4e8f05-cda8-4229-b5e9-7afb88f345f0",
        size: {
          height: 44.44449996948242,
          width: 384.4583435058594
        },
        position: {
          x: 29,
          y: 484
        },
        type: 0,
        textContent: "Happy Birthday to You!",
        fontSize: 40,
        fontFamily: "serif",
        fontColor: "yellow"
      }
    ]
  }