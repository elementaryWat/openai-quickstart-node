import Head from "next/head";
import { useState } from "react";
import { SAMPLE_LEAN_CANVAS } from "./api/sample_response";
import styles from "./index.module.css";
import LeanCanvas from "./leanCanvasTemplate";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      let parsedObject = JSON.parse(data.result.replace(/\n/g, ""));
      // let parsedObject = SAMPLE_LEAN_CANVAS;
      setResult(parsedObject);
      setIdea("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Generate Lean Canvas</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="idea"
            placeholder="Enter the idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
          <input type="submit" value="Generate Lean Canvas" />
        </form>
        {/* <div className={styles.result}>{result}</div> */}
        {result !== undefined && <LeanCanvas leanObject={result} />}
      </main>
    </div>
  );
}
