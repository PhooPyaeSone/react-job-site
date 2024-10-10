
// eslint-disable-next-line react/prop-types
function HomeCard({ children, bg = "bg-gray-100" }) {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
    )
}

export default HomeCard