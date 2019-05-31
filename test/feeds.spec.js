import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
    __collection__: {
      feeds: {
        __doc__: {
          abc123: {
            description: 'post 1',
            likes: 0,
            states: 'publico',
            user: 'social network',
            userId:'123abc'
          },
          abc124: {
            description: 'post 2',
            likes: 0,
            states: 'publico',
            user: 'social network',
            userId:'124abc'
          },   
          abc125: {
            description: 'post 3',
            likes: 0,
            states: 'publico',
            user: 'social network',
            userId:'125abc'
          },        
        }
      }
    }
  }
  
  global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

  import {saveFeed, viewFeedDb, deleteFeeds  } from "../src/lib/controller-firebase/index.js";

describe("guardar post", () => {
    it('deberia ser una funcion', () => {
        expect(typeof saveFeed).toBe("function");
    });
    it('deberia guardar un post', (done) =>{
        return saveFeed('123abc', 'post 1', 'publico', 'social network')
        .then(() => viewFeedDb((data) => {
            const result = data.find((data) => data.description === 'post 1');
            expect(result.description).toBe('post 1');
            done()
        }
        ));
    })
});