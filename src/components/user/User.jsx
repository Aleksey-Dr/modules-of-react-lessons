const Profile = ({ name, email, }) => (
    <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
    </div>
);

const Panel = ({ title, children, }) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
);

const User = () => (
    <div>
        <Panel title='User profile'>
            <Profile name='Mango' email='mango@mail.com' />
        </Panel>
    </div>
);

export default User;