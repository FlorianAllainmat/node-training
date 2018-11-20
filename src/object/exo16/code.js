import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des objets
 */

/*
 * Destructuration d'object
 */

const user = {
    id: 12,
    name: 'Romain Derocle',
    address: {
        number: 138,
        street: 'quai des chartrons',
        zip: '33300',
        city: 'Bordeaux'
    },
    helmets: ['hedon', 'xlite', 'hedon'],
    motos: [
        {
            brand: 'Harley',
            year: 2014
        },
        {
            brand: 'Triumph',
            year: 2015
        },
        {
            brand: 'Harley',
            year: 2016
        }
    ]
}

const getName = () => {
    
}

const getAddress = () => {
    
}

const getAddressCity = () => {
    
}

const getHelmets = () => {
    
}

const getSecondHelmet = () => {
    
}

const getSecondMotoBrand = () => {
    
}

Assert.equals(getName(), 'Romain Derocle')
Assert.objectEquals(getAddress(), {
    number: 138,
    street: 'quai des chartrons',
    zip: '33300',
    city: 'Bordeaux'
})
Assert.equals(getAddressCity(), 'Bordeaux')
Assert.arrayEquals(getHelmets(), ['hedon', 'xlite', 'hedon'])
Assert.equals(getSecondHelmet(), 'xlite')
Assert.equals(getSecondMotoBrand(), 'Triumph')