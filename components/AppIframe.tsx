export default function AppIframe() {
    // const [iframeSrc, setIframeSrc] = useState<string>();

    // useEffect(() => {
    //     setIframeSrc(process.env.NEXT_PUBLIC_TRIP_TODO_WEB_APP_EMULATED_URL);
    //     console.log(process.env.NEXT_PUBLIC_TRIP_TODO_WEB_APP_EMULATED_URL)
    // }, []);

    // if (!iframeSrc) {
    //     return null;
    // }

    return (
        <iframe
            // src={iframeSrc}
            src={process.env.NEXT_PUBLIC_TRIP_TODO_WEB_APP_EMULATED_URL}
            title="TRIP TODO APP"
            width={"100%"}
            height={"100%"}
        />
    )
}
