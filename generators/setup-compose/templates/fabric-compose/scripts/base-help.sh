#!/bin/bash

function printHelp() {
  echo "Fabrikka is powered by SoftwareMill"

  echo ""
  echo "usage: ./fabric-compose.sh <command>"
  echo ""

  echo "Commands: "
  echo ""
  echo "./fabric-compose.sh up"
  echo -e "\t Use for first run. Creates all needed artifacts (certs, genesis block) and starts network for the first time."
  echo -e "\t After 'up' commands start/stop are used to manage network and rerun to rerun it"
  echo ""
  echo "./fabric-compose.sh down"
  echo -e "\t Back to empty state - destorys created containers, prunes generated certificates, configs."
  echo ""
  echo "./fabric-compose.sh start"
  echo -e "\t Starts already created network."
  echo ""
  echo "./fabric-compose.sh stop"
  echo -e "\t Stops already running network."
  echo ""
  echo "./fabric-compose.sh recreate"
  echo -e "\t Fresh start - it destorys whole network, certs, configs and then reruns everything."
  echo ""
}
