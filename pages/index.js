import styles from "../styles/Home.module.css";
import { useAuth } from "../lib/auth";
import { authenticate, signout } from "../lib/firebase";

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          {!auth.user && <button onClick={authenticate}>Sign in</button>}
        </div>
        {auth.user && (
          <div>
            <button onClick={signout}>Sign out</button>
          </div>
        )}
        {auth.user && <div>{JSON.stringify(auth.user)}</div>}
      </main>
    </div>
  );
}
