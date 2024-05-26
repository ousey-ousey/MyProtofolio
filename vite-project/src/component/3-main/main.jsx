import { useState } from "react";
import "./main.css";
import { motion } from "framer-motion";
const myprojects = [
  { title: "landing company", category: "css", imgpath: "a" },
  {
    title: "javascript2",
    category: ["JS", "tailwind"],
    imgpath: "a",
  },
  { title: "javascript1", category: "JS", imgpath: "a" },
  { title: "Racto", category: "React", imgpath: "a" },
];
export default function Main() {
  const [active, setactive] = useState("all");
  const [arr, setarr] = useState(myprojects);

  const handleClick = (buttonCategory) => {
    setactive(buttonCategory);
    const newarr = myprojects.filter((item) => {
      return item.category.includes(buttonCategory);
    });

    setarr(newarr);
  };
  return (
    <main className="flex">
      <section className="left-section ">
        <button
          onClick={() => {
            setactive("all");
            setarr(myprojects);
          }}
          className={active === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("JS");
          }}
          className={active === "JS" ? "active" : null}
        >
          Javascript
        </button>
        <button
          onClick={() => {
            handleClick("React");
          }}
          className={active === "React" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("tailwind");
          }}
          className={active === "tailwind" ? "active" : null}
        >
          tailwind
        </button>
      </section>
      <section id="maincont" className="flex right-section ">
        {arr.map((item, index) => {
          return (
            <motion.article
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              key={index}
              className="card "
            >
              <div id="BOX">
                <img src="../../../public/3.jpg" width={270} />
                <div className="box " style={{ width: 270 }}>
                  <h2>{item.title}</h2>
                  <p className="sub-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius facere aliquid vel error unde beatae architecto sunt
                    possimus nisi porro sint facilis quasi, ad aperiam
                    voluptates accusamus amet labore laboriosam.
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <span className="icon-link"></span>
                      <span className="icon-github"></span>
                    </div>
                    <a href="" id="linko" className="flex">
                      more
                      <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}
