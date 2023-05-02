export default function Pledge({pledge}) {
    return (
        <>
        <div>{pledge.email} has donated ${pledge.amount}
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Enter your Amount" onChange={handleUpdateChange} />
                <input type="submit" value="Update Pledge!" />
            </form>
            <form>
                <input type="submit" value="Delete Pledge!" />
            </form>
        </div>
        </>
    )
}
