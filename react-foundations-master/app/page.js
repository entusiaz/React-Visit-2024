import LikeButton from './like-button';

function Header({ title }) {
    console.log(title);
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Magaret Hamilton'];

    return  (
        <div>
        <Header title="Develop. Preview. Ship." />
        <ul>
            {names.map((name) => (
            <li key={name}>{name}</li>
            ))}
        </ul>
       <LikeButton />
        </div>
    );
}
