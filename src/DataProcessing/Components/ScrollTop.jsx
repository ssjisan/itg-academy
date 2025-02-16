
export default function ScrollTop() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        {
            goToTop
        }
    )
}
