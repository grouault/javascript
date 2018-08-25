/**
 * Created by grouault on 13/04/2018.
 */
/*--

Singleton --*/
function MapBuilder() {

    this.build = function (mapOptions) {
        var newMap = new MapGoogle(mapOptions);
        console.log('NewMap : name = ', newMap.getName());
        console.log('newMap = ', newMap);
    };

}

/*--

MapGoogle : prototype --*/
function MapGoogle(mapOptions) {

    this.options = mapOptions;

    this.init = function (mapOptions) {
        console.log('-init');
        return this.map;
    }

    this.getName = function () {
        return this.options.name;
    }

}

/*-- main --*/
var builderMap = new MapBuilder();
builderMap.build({'name':'map-1'});
builderMap.build({'name':'map-2'});