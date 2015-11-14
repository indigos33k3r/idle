/* 
 * The MIT License
 *
 * Copyright 2015 Tetrinity.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
describe("MenuCtrl", function(){
    
    var controller
    var $scope, $location
    
    
    beforeEach(module('idle.controller'))
    
    beforeEach(inject(function(_$controller_, _$location_){
        $scope = {}
        $location = _$location_
        
        controller = _$controller_('MenuCtrl', { $scope: $scope, $location: $location })
    }))
    
    describe("newGame", function(){
        it("should clear save data", function(){
            
        })
        
        it("should direct the user to the game view", function(){
            var gameUrl = '/game'
            expect($location.path()).not.toEqual(gameUrl)
            
            $scope.newGame()
            expect($location.path()).toEqual(gameUrl)
        })
    })
})