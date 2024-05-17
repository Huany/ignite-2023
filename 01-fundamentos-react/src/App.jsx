import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://media.licdn.com/dms/image/C4E03AQH2IOypi1jdaQ/profile-displayphoto-shrink_400_400/0/1654208289037?e=1683763200&v=beta&t=K9OnHN1edhGkWiOzDIuOIIzLa7f44C1nLNUMTfh1570",
      name: "Huany Dourado",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-13 00:53:02"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://media.licdn.com/dms/image/C4D03AQGrkQEAu1dTFg/profile-displayphoto-shrink_100_100/0/1656437451099?e=1683763200&v=beta&t=r6lSs0-U7QuoLOeuEhdM7UgHSaVUUTofJ_DTy-_N-EM",
      name: "Leonardo Vasconcelos",
      role: "Web Developer Jr.",
    },
    content: [
      { type: "paragraph", content: "Oooooi" },
      {
        type: "paragraph",
        content: "Muito bom o conteúdo! Parabéns",
      },
      { type: "link", content: "google.com.br" },
    ],
    publishedAt: new Date("2022-10-02 17:20:28"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        {/* <Post author="Dourado" content="Outro post" />
        <Post author="Dourado" content="Outro post" /> */}
        </main>
      </div> 
    </div>
  );
}
