var assert = require('assert')
var english = require('../src/english')

describe('Array', () => {
	describe('#english.words_list()', () => {
		it("Should break down sentence's word's list", () => {
			assert.equal(
				String(english.words_list('drop him off')),
				String(['drop', 'him', 'off'])
			)
		})
		it('Should handle punctuation such as commas, dots, white spaces etc...', () => {
			assert.equal(
				String(english.words_list('drop him off.')),
				String(['drop', 'him', 'off'])
			)
			assert.equal(
				String(english.words_list(' drop, him off.')),
				String(['drop', 'him', 'off'])
			)
			assert.equal(
				String(english.words_list('drop him off.')),
				String(['drop', 'him', 'off'])
			)
		})
	})

	describe('#english.has_preposition()', () => {
		it('#test1 Should return true wether or not the last word is a preposition', () => {
			assert.equal(english.has_preposition('drop him off'), true)
		})
		it('#test2 Should return true wether or not the last word is a preposition', () => {
			assert.equal(english.has_preposition('drop him'), false)
		})
		it('#test3 Should return true wether or not the last word is a preposition', () => {
			assert.equal(english.has_preposition('drop him out'), true)
		})
	})
})
