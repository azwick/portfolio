import Head from 'next/head'
import styles from '../styles/Development.module.css'

const Iframex = ({ url, title }) => {
    return (
        <iframe className={styles.iframe} src={url}
            title={title}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    );
}

const Development = () => {
    return ( 
        <>
            <Head>
                <title>Zwickermann | Development</title>
                <meta name="keywords" content="Front-end Design, Design, Frontend-Development, Development, Developer, Anne Debora Zimmermann-Zwick" />
                <meta name="description" content="Latest dev projects from Anne Debora Zimmermann-Zwick on zwickermann."/>
            </Head>

            <main className={styles.main}>

                <div className={styles.heading}>
                    <h1 className="headline01">Front-end Development</h1>
                    <blockquote className={styles.quote}>
                        "I have never tried that before, so I think I should definitely be able to do that." <br/>
                        <span className={styles.author}>Pippi Longstocking</span>
                    </blockquote>
                </div>

                <h3 className="headline03 spaceTop">1. To-Do List (React + Typescript)</h3>
                <Iframex 
                    url="https://codesandbox.io/embed/1-todo-list-s34v4?fontsize=14&hidenavigation=1&module=%2Fsrc%2FToDoApp.tsx&theme=dark"
                    title="To-Do List (React + Typescript)"
                />
                <h3 className="headline03 spaceTop">2. Github User Search (React + Typescript)</h3>
                <Iframex 
                    url="https://codesandbox.io/embed/2-github-user-search-n9wm9?fontsize=14&module=%2Fsrc%2FGitHubApp.tsx&theme=dark"
                    title="Github User Search (React + Typescript)"
                />
                <h3 className="headline03 spaceTop">3. Dark Mode Switch (React + Typescript)</h3>
                <Iframex 
                    url="https://codesandbox.io/embed/3-dark-mode-switch-941ep?fontsize=14&module=%2Fsrc%2FDarkModeSwitch.tsx&theme=dark"
                    title="Dark Mode Switch (React + Typescript)"
                />
                <h3 className="headline03 spaceTop">4. Timer - Play, Pause, Stop (React + Typescript)</h3>
                <Iframex 
                    url="https://codesandbox.io/embed/4-timer-play-pause-stop-bqk44?fontsize=14&module=%2Fsrc%2FTimer.tsx&theme=dark"
                    title="Timer - Play, Pause, Stop (React + Typescript)"
                />
                
                {/* 
                    1. ToDo List
                    2. Github User Search
                    3. Dark Mode Switch
                    4. Timer (Play, Pause, Stop)
                    5. Metronome
                    6. Simple Dashboard
                    7. Drag and Drop
                    8. Forms
                    9. Gallery (Masonry)
                    10. Memory Game

                    y. Work with an API (Joke API)
                    z. Pixel Art drawing application
                */}
            </main>
        </>
    );
}

export default Development;