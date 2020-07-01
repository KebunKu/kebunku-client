import React, { useRef, useState, useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  postFavorite,
  deleteFavorite,
  postUserPlant,
} from '../store/actions/index';
import styles from '../style/fruitDetailStyle';
import detailImage from '../../assets/image/detail/detailImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function FruitDetail({ route, navigation }) {
  const fruit = route.params.obj
  const favor = route.params.favor;
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // console.log(fruit, "ini fruit =======")

  const dispatch = useDispatch();

  const myFav = useSelector((state) => state.favReducer.favList);

  const checkIfFavorTop = function () {
    // TESTING IF PROPS APAAN GITU NTAR IJO / PUTIH
    if (favor)
      return (
        <TouchableOpacity style={styles.boxFav} onPress={() => toogleFav(fruit._id)}>
          <MaterialCommunityIcons name="bookmark" style={styles.saveBtnTrue} />
        </TouchableOpacity>
      );
    return (
      <TouchableOpacity style={styles.boxFav} onPress={() => toogleFav(fruit._id)}>
        <MaterialCommunityIcons
          name="bookmark-outline"
          style={styles.saveBtnTrue}
        />
      </TouchableOpacity>
    );
  };

  const plantThis = function (PlantId) {
    navigation.navigate('PlantThisPage', {
      PlantId
    })
  };

  const toogleFav = async function (PlantId) {
    if (!favor) return dispatch(postFavorite(PlantId));
    return dispatch(deleteFavorite(PlantId));
  };

  const checkIfFavorBot = function () {
    if (!favor) {
      return (
        <TouchableOpacity onPress={() => toogleFav(fruit._id)}>
          <View style={styles.actionFavFalse}>
            <MaterialCommunityIcons
              name="bookmark-outline"
              style={styles.saveBtnBottom}
            />
            <Text style={styles.actionText}>Favourite</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => toogleFav(fruit._id)}>
          <View style={styles.actionFavFalse}>
            <MaterialCommunityIcons
              name="bookmark"
              style={styles.saveBtnBottom}
            />
            <Text style={styles.actionText}>Favourite</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  let image;

  for (let i = 0; i < detailImage.length; i++) {
    if (detailImage[i].imgName === fruit.name) {
      image = detailImage[i].uri;
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.header}> */}
        <Text style={styles.headerText}>{fruit.name}</Text>
        {checkIfFavorTop()}
        {/* </View> */}
        <Image style={styles.detailImg} source={image} />
        <Text style={styles.paragrafTitle}>Nama Buah</Text>
        <Text style={styles.paragrafText}>{fruit.name}</Text>

        <Text style={styles.paragrafTitle}>Nama Latin</Text>
        <Text style={styles.paragrafText}>{fruit.scientific_name}</Text>

        <Text style={styles.paragrafTitle}>Overview</Text>
        <Text style={styles.paragrafText}>{fruit.overview}</Text>

        <Text style={styles.paragrafTitle}>Fase Generatif</Text>
        <Text style={styles.paragrafText}>{fruit.fase_generatif}</Text>

        <Text style={styles.paragrafTitle}>Fase Vegetatif</Text>
        <Text style={styles.paragrafText}>{fruit.fase_vegetatif}</Text>
        <View style={{ marginBottom: 50 }}></View>
        <View style={{flex: 1, flexDirection:'column'}}>
        <YoutubePlayer
          ref={playerRef}
          height={300}
          width={400}
          videoId={fruit.video}
          play={playing}
          onChangeState={event => console.log(event)}
          onReady={() => console.log("ready")}
          onError={e => console.log(e)}
          onPlaybackQualityChange={q => console.log(q)}
          volume={50}
          playbackRate={1}
          playerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true
          }}
        />
        </View>
      </ScrollView>
      <View style={styles.action}>
        {/* <View style={styles.}></View> */}
        {/* <View style={styles.actionPlant}></View> */}

        {checkIfFavorBot()}

        <TouchableOpacity onPress={() => plantThis(fruit._id)}>
          <View style={styles.actionPlant}>
            <MaterialCommunityIcons
              name="spa-outline"
              style={styles.saveBtnBottom}
            />
            <Text style={styles.actionText}>Plant This</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
