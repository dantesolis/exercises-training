import * as _ from 'lodash';
// import isEqual from 'lodash/isEqual'; // for keeping bundle size smaller

describe('Cloning', () => {
	
	describe('shallow cloning', () => {
		// implement shallowClone operation
		// which recreates only the top-level of a data structure
		function shallowClone(data){
			//...
		}

		it('can clone simple objects', () => {
			var src1 = {
				a: 1,
				b: 2,
				c: 3
			};
			var clone1 = shallowClone(src1);
			expect(src1 == clone1).toEqual(false);
			expect(src1 === clone1).toEqual(false);
			expect(_.isEqual(src1, clone1)).toEqual(true);

			var src2 = {
				g: 7,
				h: 8,
				i: 9,
				j: 10
			};
			var clone2 = shallowClone(src2);
			expect(src2 == clone2).toEqual(false);
			expect(src2 === clone2).toEqual(false);
			expect(_.isEqual(src2, clone2)).toEqual(true);
		});

		it('can clone objects with methods', () => {
			var src1 = {
				a: 1,
				b: 2,
				c: 3,
				hello: function(){ console.log('hello') }
			};
			var clone1 = shallowClone(src1);
			expect(src1 == clone1).toEqual(false);
			expect(src1 === clone1).toEqual(false);
			expect(_.isEqual(src1, clone1)).toEqual(true);

			var src2 = {
				g: 7,
				h: 8,
				i: 9,
				j: 10,
				hello: function(){ console.log('hello') }
			};
			var clone2 = shallowClone(src2);
			expect(src2 == clone2).toEqual(false);
			expect(src2 === clone2).toEqual(false);
			expect(_.isEqual(src2, clone2)).toEqual(true);
		});
	});

	describe('deep cloning', () => {
		// implement deepClone operation
		// which recreates all (top and each nested) levels of a data structure
		function deepClone(data){
			//...
		}

		it('can clone nested objects', () => {
			var src = {
				a: 1,
				b: 2,
				nested: {
					x: 11,
					y: 12,
					z: 13
				},
				hello: function(){ console.log('hello') }
			};
			var clone = deepClone(src);
			expect(src == clone).toEqual(false);
			expect(src === clone).toEqual(false);
			expect(src.nested == clone.nested).toEqual(false);
			expect(src.nested === clone.nested).toEqual(false);
			expect(_.isEqual(src, clone)).toEqual(true);
		});

		it('can clone deeply nested objects', () => {
			var src = {
				a: 1,
				b: 2,
				nested: {
					x: 11,
					nested: {
						y: 12,
						nested: {
							z: 13
						}
					}
				},
				hello: function(){ console.log('hello') }
			};
			var clone = deepClone(src);
			expect(src == clone).toEqual(false);
			expect(src === clone).toEqual(false);
			expect(src.nested == clone.nested).toEqual(false);
			expect(src.nested === clone.nested).toEqual(false);
			expect(_.isEqual(src, clone)).toEqual(true);
		});
	});
});
