docker rm -f $(docker ps -aq)

cd ARM_Starter

run/build.bat


cd ARM_Backend

run/build.bat


cd ARM_IA

run/build.bat
