import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des objets
 */

/*
 * @see Object.entries
 * Créer une fonction qui parcourt un tableau et affiche ses infos comme dans l'exemple :
 * 
 * const user = { id: 12, name: 'Romain', city: 'Bordeaux' }
 * display(user)
 *   id => 12
 *   name => Romain
 *   city => Bordeaux
 */

const display = (object) => {
    Object.entries(object).map(elem => {
        console.log(`${elem[0]} => ${elem[1]}`)
    })
}

display({ id: 12, name: 'Romain', city: 'Bordeaux' })