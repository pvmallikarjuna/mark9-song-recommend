import React, { useState } from "react";
import "./styles.css";

const songsList = [
  {
    ಕನ್ನಡ: [
      {
        song: "Munjaane Manjalli",
        year: "2010",
        movie: "Just Math Mathalli",
        link: "https://www.youtube.com/watch?v=lbz7JydNb_Y"
      },
      {
        song: "Tunturu ",
        year: "1997",
        movie: "Amruthavarshini ",
        link: "https://www.youtube.com/watch?v=ZSNuG7-rk6M"
      },
      {
        song: "Anisuthide",
        year: "2006",
        movie: "Mungaru Male",
        link: "https://www.youtube.com/watch?v=nlsLKA6hlVQ"
      },
      {
        song: "Minchagi Neenu",
        year: "2008",
        movie: "Gaalipata",
        link: "https://www.youtube.com/watch?v=zecRgZYi-kw"
      }
    ]
  },
  {
    తెలుగు: [
      {
        song: "Chiru Chiru",
        year: "2010",
        movie: "Awaara",
        link: "https://www.youtube.com/watch?v=hCt-H4-5wco"
      },
      {
        song: "Vaana Vaana",
        year: "2014",
        movie: "Racha",
        link: "https://www.youtube.com/watch?v=fa3A5T4-QP0"
      },
      {
        song: "Jala Jala Jalapatham",
        year: "2020",
        movie: "Uppena",
        link: "https://www.youtube.com/watch?v=PTpimuHzlvE"
      },
      {
        song: "Nuvvosthanante ",
        year: "2006",
        movie: "Varsham",
        link: "https://www.youtube.com/watch?v=eUrC0jWdu-M"
      }
    ]
  },
  {
    हिंदी: [
      {
        song: "Barso Re",
        year: "2007",
        movie: "Guru",
        link: "https://www.youtube.com/watch?v=B1dmwRBVqWI"
      },
      {
        song: "Sawan Aaya Hai",
        year: "2014",
        movie: "Creature 3D",
        link: "https://www.youtube.com/watch?v=B5_6jfGsyjA"
      },
      {
        song: "Baarish",
        year: "2017",
        movie: "Half Girlfriend",
        link: "https://www.youtube.com/watch?v=BNfAf4To73c"
      },
      {
        song: "Kabhi Jo Badal",
        year: "2013",
        movie: "Jackpot",
        link: "https://www.youtube.com/watch?v=RazuWp5kSHk"
      }
    ]
  },
  {
    தமிழ்: [
      {
        song: "Thuli Thuli",
        year: "2010",
        movie: "Paiya",
        link: "https://www.youtube.com/watch?v=IngvLGgX-YU"
      },
      {
        song: "Pavizha Mazha",
        year: "2019",
        movie: "Athiran ",
        link: "https://www.youtube.com/watch?v=P-jKtzUuVcM"
      },
      {
        song: "Megham Karukatha",
        year: "2022",
        movie: "Thiruchitrambalam ",
        link: "https://www.youtube.com/watch?v=cEWwJxEq9Lg"
      },
      {
        song: "Pularaadha",
        year: "2019",
        movie: "Dear Comrade",
        link: "https://www.youtube.com/watch?v=ztGJhlEFFjs"
      }
    ]
  }
];

export default function App() {
  const [songs, setSong] = useState([]);

  const displaySongs = (t) => {
    var a = t[Object.keys(t)];

    setSong(a);
  };

  return (
    <>
      <div className="App">
        <div className="saavn">
          <h1>DESI SAAVN 🌧 ️</h1>
        </div>

        <p>Rain Songs from All over the country. Click songs to play now</p>

        {songsList.map((t, index) => {
          // console.log(t)
          return (
            <button onClick={() => displaySongs(t)}>{Object.keys(t)}</button>
          );
        })}

        <hr style={{ marginTop: "2rem", width: "80vw" }} />
        <ul className="card-list">
          {songs.map((t) => {
            return (
              <>
                <li className="card">
                  <a href={t.link}>
                    <h4>{t.song}</h4>
                    <p>
                      from{" "}
                      <span
                        style={
                          ({ fontStyle: "italic" }, { fontWeight: "bold" })
                        }
                      >
                        {" "}
                        {t.movie}
                      </span>
                    </p>
                    <p>released in {t.year}</p>
                  </a>
                </li>

                <br />
              </>
            );
          })}
        </ul>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
