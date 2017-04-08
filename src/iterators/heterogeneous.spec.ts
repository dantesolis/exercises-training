import db from '../../data/data';
import dbSX, { SXAccount } from '../../data/data-alt';
import { Employee, Nationality } from '../../data/data';

describe('Heterogeneous Collections Iterators', () => {

  // in this exercise we will be dealing with two different data structures
  // you'll find them in:
  // - data/data.ts
  // - data-data-alt.ts
  // both produce collections of employees

  // the task is to create generators which will iterate over these collections
  // AS IF IT WAS ONE COLLECTION (abstracting away the difference)

  it('iterates over heterogeneous data structures and returns one item per step', () => {
    // the first task is to create a generator that will simply iterate
    // over one collection and then over the second one and terminate
    // no structure changes (this we'll do later)
    // first we need to create a datatype for the iterator - note that
    // it will iterate over DIFFERENT data structures

    // define HeterogeneousIterator datatype here

    // and now implement the generator itself - it will iterate over employees first and then on accounts

    // define iterateCollections generator here

    let iterator: HeterogeneousIterator;
    iterator = iterateCollections(db.getEmployees(), dbSX.getAccounts());
    let dumped = [...iterator];
    expect(dumped.length).toEqual(377);
    expect(dumped[0].id).toEqual(7213);
    expect(dumped[0].name).toEqual("Earlene Hirthe");
    expect(dumped[110].id).toEqual(9261);
    expect(dumped[110].nationality).toEqual("ES");
    expect(dumped[367].id).toEqual("a2d7afdc-9e1f-453f-81bd-75da7d83ddaa");
    expect(dumped[367].firstName).toEqual("Alysha");
    expect(dumped[367].country).toEqual("United Kingdom");
    expect(dumped[367].phones.length).toEqual(0);
    expect(dumped[372].id).toEqual("c021adaa-713f-486e-a601-93c2c8cf00c7");
    expect(dumped[372].firstName).toEqual("Nelson");
    expect(dumped[372].country).toEqual("United States");
    expect(dumped[372].phones[0]).toEqual("(893) 775-6690 x4491");
  })

  it('iterates over heterogeneous data structures and returns one item per step', () => {
    interface UnifiedEmployee {
      id: string | number;
      fullName: string;
      contactPhone: string;
      countryCode: Nationality;
      salary: number;
    }

    // the second step is to improve above generator and map all items into the unified data structure
    // the UnifiedEmployee datatype is provided above
    // We need an iterator datatype or UnifiedEmployee

    // define UnifiedIterator datatype here

    // mapping original employee objects to unified employees
    // (as well as mapping accounts to unified employees)
    // will require to write some mapping functions
    // write them here

    // finally, implement the new generator itself:
    // it will iterate over employees first and then on accounts, just as the old one did
    // but twis time it will map the items to the unified structure
    // SO THAT THE CONSUMER OF THIS GENERATOR DOESN'T NECESSARILY KNOW THAT DATA SOURCES WERE DIFFERENT
    // EXAMPLE: [{attr:1}] + [{at: 7}] -> [{attribute:1}, {attribute:7}]

    // define iterateAndUnifyCollections generator here

    let iterator: UnifiedIterator;
    iterator = iterateAndUnifyCollections(db.getEmployees(), dbSX.getAccounts());
    let dumped = [...iterator];
    expect(dumped.length).toEqual(377);
    expect(dumped[0].id).toEqual(7213);
    expect(dumped[0].fullName).toEqual("Earlene Hirthe");
    expect(dumped[110].id).toEqual(9261);
    expect(dumped[110].countryCode).toEqual("ES");
    expect(dumped[367].id).toEqual("a2d7afdc-9e1f-453f-81bd-75da7d83ddaa");
    expect(dumped[367].fullName).toEqual("Alysha Okuneva");
    expect(dumped[367].countryCode).toEqual("UK");
    expect(dumped[367].contactPhone).toEqual(null);
    expect(dumped[372].id).toEqual("c021adaa-713f-486e-a601-93c2c8cf00c7");
    expect(dumped[372].fullName).toEqual("Nelson Marquardt");
    expect(dumped[372].countryCode).toEqual("US");
    expect(dumped[372].contactPhone).toEqual("(893) 775-6690 x4491");
  })

})
