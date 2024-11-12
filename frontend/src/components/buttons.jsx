
function Button(label, path ) {
    const handleNavigation = () => {
        window.location.href = path; // Redirects to the specified path
    };

    return (
        <button style={{margin:3}} onClick={handleNavigation}>
            {label}
        </button>
    );
}

export default Button