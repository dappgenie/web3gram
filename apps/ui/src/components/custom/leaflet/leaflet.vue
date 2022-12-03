<template>
    <div :id="id" :style="'height: '+ height+'px;'">
        <slot/>
    </div>
</template>
<script>
import L from 'leaflet'
export default {
  name: 'leaflet',
  props: {
    id: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 405
    },
    options: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.mapoption()
  },
  methods: {
    mapoption () {
      const map = L.map(this.id).setView([37.8, -96], 4)
      var statesData = {
        type: 'FeatureCollection',
        features: this.options
      }

      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      const tileLayer = L.tileLayer(tileUrl, { attribution })

      function getColor (d) {
        return d > 1000 ? '#172d69'
          : d > 500 ? '#1c367d'
            : d > 200 ? '#203f92'
              : d > 100 ? '#2548a7'
                : d > 50 ? '#2950bc'
                  : d > 20 ? '#2e59d1'
                    : d > 10 ? '#d5def6'
                      : '#c0cdf1'
      }
      function style (feature) {
        return {
          fillColor: getColor(feature.properties.density),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }

      L.geoJson(statesData, { style: style }).addTo(map)

      tileLayer.addTo(map)
    }
  }
}
</script>
