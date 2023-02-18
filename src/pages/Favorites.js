import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>You have no favorites.  Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <div>Favorites Page</div>
            {content}
        </section>
    );
}

export default FavoritesPage;