#!/bin/bash
echo "Enter Principal:"
read P
echo "Enter Rate (per year):"
read R
echo "Enter Time (in years):"
read T
SI=$((P * R * T / 100))
echo "Simple Interest = $SI"
