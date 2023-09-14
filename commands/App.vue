<template>
  <DxChart :data-source="data">
    <DxArgumentAxis :tick-interval="10" />
    <DxSeries type="bar" />
    <DxLegend :visible="false" />
  </DxChart>
</template>

<script setup>
import DxChart, { DxArgumentAxis, DxSeries, DxLegend } from "devextreme-vue/chart";

const data = [
  {
    arg: 1990,
    val: 5320816667,
  },
  {
    arg: 2000,
    val: 6127700428,
  },
  {
    arg: 2010,
    val: 6916183482,
  },
];
</script>
