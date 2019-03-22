import { library } from '@fortawesome/fontawesome-svg-core';
import { faCreditCard, faMinus, faPlus, faSadCry, faSearch, faShoppingCart, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

/**
 * All the icons used in the library are declared here. This allows us to
 * ship only the needed icons so that the bundle does not get bloated.
 */
export function buildIconLibrary() {
    library.add(
        faTimes,
        faMinus,
        faPlus,
        faShoppingCart,
        faUser,
        faCreditCard,
        faSearch,
        faSadCry,
    );
}