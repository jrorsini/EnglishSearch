var assert = require('assert')
var eng = require('../src/english')

describe('Array', () => {
	describe('#eng.words()', () => {
		it("Should break down sentence's word's list", () => {
			assert.equal(
				String(eng.words('drop him off')),
				String(['drop', 'him', 'off'])
			)
		})
		it('Should handle punctuation such as commas, dots, white spaces etc...', () => {
			assert.equal(String(eng.words('drop ')), String(['drop']))
			assert.equal(String(eng.words('drop.')), String(['drop']))
			assert.equal(String(eng.words('drop')), String(['drop']))
			assert.equal(
				String(eng.words('drop him off.')),
				String(['drop', 'him', 'off'])
			)
			assert.equal(
				String(eng.words(' drop, him off.')),
				String(['drop', 'him', 'off'])
			)
			assert.equal(
				String(eng.words('drop him off.')),
				String(['drop', 'him', 'off'])
			)
		})
	})

	describe('#eng.is_preposition()', () => {
		it('#test1 Should return true wether or not the last word is a preposition', () => {
			assert.equal(eng.is_preposition('off'), true)
		})
		it('#test2 Should return true wether or not the last word is a preposition', () => {
			assert.equal(eng.is_preposition('him'), false)
		})
		it('#test3 Should return true wether or not the last word is a preposition', () => {
			assert.equal(eng.is_preposition('out'), true)
		})
	})

	describe('#eng.format()', () => {
		it('#test1 Should return proper search format', () => {
			assert.equal(eng.format('drop off'), 'drop off')
		})
		it('#test2 Should return proper search format', () => {
			assert.equal(eng.format('drop him off'), 'drop off')
		})
		it('#test3 Should return proper search format', () => {
			assert.equal(eng.format('drop him off.'), 'drop off')
		})
		it('#test4 Should return proper search format', () => {
			assert.equal(eng.format('drop.'), 'drop')
		})
		it('#test5 Should return proper search format', () => {
			assert.equal(eng.format('off.'), 'off')
		})
	})
})
