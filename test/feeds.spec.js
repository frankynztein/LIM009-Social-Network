import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
	__collection__: {
	  feeds: {
		__doc__: {
		  abc123: {
			description: 'post 1',
			likes: 0,
			state: 'publico',
			user: 'social network',
			userId:'123abc'
          },
          abc124: {
			description: 'post 2',
			likes: 0,
			state: 'publico',
			user: 'social network',
			userId:'124abc'
          },   
          abc125: {
			description: 'post 3',
			likes: 0,
			state: 'publico',
			user: 'social network',
			userId:'125abc'
          },        
		}
	  }
	}
	}
	
  
  global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

  import {saveFeed, viewFeedDb, deleteFeeds, updatePost} from "../src/lib/controller-firebase/index.js";

describe("guardar post", () => {
  it('deberia ser una funcion', () => {
      expect(typeof saveFeed).toBe("function");
  });
  it('deberia guardar un post', (done) =>{
      return saveFeed('123abcd', 'post 1', 'publico', 'social network')
		.then(() => {
		const callback =(post)=>{
					// console.log(post)
			const result = post.find( (element) => {
					// console.log(element)
			return element.data.description === 'post 1'
		})
				// console.log(result)
		expect(result.data.description).toBe('post 1')
		done()
		}
		viewFeedDb(callback,'123abcd');
		})
  })
});

describe ("borrar un post", () => {
		it("deberia ser una funcion", () => {
			expect(typeof deleteFeeds).toBe("function");
		});
		it("deberia borrar un post",(done) => {
			return deleteFeeds("abc123")
			.then(() => {
				const callback = (post) => {
					const result = post.find ( (element) => {
						//console.log(element);
						return element.id === "abc123"
					})
					expect(result).toBe( undefined)
					done()
				}
				viewFeedDb(callback,"123abc");
			})
		})
});

describe ("editar post", () => {
	it("deberia ser una funcion", () => {
		expect(typeof updatePost).toBe("function");
	});
	it("deberia editar una funcion", (done) => {
		return updatePost('abc125', 'post 3', 'privado')
		.then(() => {
			const callback = (post) => {
				const result = post.find((element) => {
					console.log(element);
					return element.data.state === 'privado'
				})
				console.log(result);
				expect(result.data.state).toBe('privado')
				done()
			}
			viewFeedDb(callback , '125abc');
		})
	})

})