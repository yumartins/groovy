#!/bin/bash

APPMUSIC_COMMAND=$1
shift

if [[ "$APPMUSIC_COMMAND" == "play" ]]; then
  eval "yarn lerna run $1 $2 $3"
elif [[ -z "$1" ]] || [[ $1 == --* ]]; then

  eval "yarn lerna run $APPMUSIC_COMMAND $@"
else
  APPMUSIC_WORKSPACES=$1
  shift

  IFS=', ' read -r -a workspaces <<< "$APPMUSIC_WORKSPACES"

  if [[ ${#workspaces[@]} -gt 1 ]]; then
    echo "Running command on $APPMUSIC_WORKSPACES workspaces"
    eval "yarn lerna run $APPMUSIC_COMMAND --scope=app-{$APPMUSIC_WORKSPACES} --parallel $@"
  else
    echo "Running command on $APPMUSIC_WORKSPACES workspace"
    eval "yarn lerna run $APPMUSIC_COMMAND --scope=app-$APPMUSIC_WORKSPACES --parallel $@"
  fi
fi
