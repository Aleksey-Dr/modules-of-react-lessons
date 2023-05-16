const favoriteBooks = [
    { id: "id-1", name: "JS for beginners", },
    { id: "id-2", name: "React basics", },
    { id: "id-3", name: "React Router overview", },
    { id: "id-4", name: "Redux in depth", },
];

const BookList = ({ books }) => {
    return (
        <ul>
            {books.map(book => (
                <li key={ book.id }>{ book.name }</li>
            ))}
        </ul>
    );
};

const Books = () => {
    return (
        <div>
            <BookList books={favoriteBooks} />
        </div>
    );
};

export default Books;