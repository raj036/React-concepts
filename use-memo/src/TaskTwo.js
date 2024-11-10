import React, { useState, useMemo, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(100);
    const [sortBy, setSortBy] = useState("name");

    useEffect(() => {
        setTimeout(() => {
            setUsers([
                { id: 1, name: "Alice", age: 28 },
                { id: 2, name: "Bob", age: 32 },
                { id: 3, name: "Charlie", age: 24 },
                { id: 4, name: "David", age: 29 },
                { id: 5, name: "Eve", age: 35 },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const filteredAndSortedUsers = useMemo(() => {
        console.log("Filtering and sorting users...");

        let filtered = users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                user.age >= minAge &&
                user.age <= maxAge
        );

        if (sortBy === "name") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "age") {
            filtered.sort((a, b) => a.age - b.age);
        }

        return filtered;
    }, [searchQuery, minAge, maxAge, sortBy, users]);

    if (loading) return <div>Loading users...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User List</h1>

            <input
                type="text"
                className="border rounded p-2 mb-4 w-full"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="mb-4">
                <label className="mr-2">Min Age:</label>
                <input
                    type="number"
                    className="border rounded p-2"
                    value={minAge}
                    onChange={(e) => setMinAge(Number(e.target.value))}
                />

                <label className="ml-4 mr-2">Max Age:</label>
                <input
                    type="number"
                    className="border rounded p-2"
                    value={maxAge}
                    onChange={(e) => setMaxAge(Number(e.target.value))}
                />
            </div>

            <div className="mb-4">
                <label className="mr-2">Sort By:</label>
                <select
                    className="border rounded p-2"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="age">Age</option>
                </select>
            </div>

            <ul className="list-disc pl-5">
                {filteredAndSortedUsers.length > 0 ? (
                    filteredAndSortedUsers.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.age} years old
                        </li>
                    ))
                ) : (
                    <li>No users found</li>
                )}
            </ul>
        </div>
    );
};

export default UserList;
