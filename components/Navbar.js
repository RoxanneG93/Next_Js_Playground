
import Link from "next/Link";

const Navbar = () => {
    const styles = {
        display: "flex",
        backgroundColor: "grey",
        justifyContent: "space-between",
        padding: "1rem"
    }

    return (
        <div styles={styles}>
            <Link href="/about">
                <a>About Page</a>
            </Link>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/contact">
                {/* can put anything here as long as it accepts an onClick event that fires the routing */}
                <a>contact!</a>
            </Link>

        </div>
    )
}
export default Navbar;
