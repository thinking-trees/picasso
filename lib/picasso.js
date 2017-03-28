#!/usr/bin/env node

const Brush = require('./brush.class');
const Paint = require('./paint.class');

let paint = new Paint();
let brush = new Brush();

brush.draw(paint);
