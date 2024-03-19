import {
  FlexWidget,
  FlexWidgetStyle,
  ImageWidget,
  TextWidget,
  TextWidgetStyle,
} from "react-native-android-widget";

const styles: {
  actualContainer: FlexWidgetStyle;
  widgetContainer: FlexWidgetStyle;
  titleText: TextWidgetStyle;
  ctaContainer: FlexWidgetStyle;
  ctaSingleContainer: FlexWidgetStyle;
  buttonContainer: FlexWidgetStyle;
  actionText: TextWidgetStyle;
} = {
  actualContainer: {
    flex: 1,
    width: "match_parent",
    height: "match_parent",
    justifyContent: "center",
  },
  widgetContainer: {
    flexDirection: "column",
    width: "match_parent",
    height: "wrap_content",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
  },
  titleText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#58A4E7",
    padding: 10,
    borderRadius: 10,
  },
  ctaContainer: {
    flex: 1,
    flexDirection: "row",
    width: "match_parent",
    height: "wrap_content",
    justifyContent: "space-between",
  },
  ctaSingleContainer: {
    flex: 1,
    flexDirection: "column",
    width: "wrap_content",
    height: "wrap_content",
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    color: "#000000",
    fontSize: 15,
  },
};

const widgetImageSize = 30;

function AndroidWidget() {
  return (
    <FlexWidget style={styles.actualContainer}>
      <FlexWidget style={styles.widgetContainer} clickAction="OPEN_APP">
        <TextWidget
          text={'Title'}
          style={styles.titleText}
          allowFontScaling
        />

        <FlexWidget style={styles.ctaContainer}>
          <FlexWidget style={styles.ctaSingleContainer}>
            <FlexWidget style={styles.buttonContainer}>
              <ImageWidget
                image={require("../../../assets/favicon.png")}
                imageWidth={widgetImageSize}
                imageHeight={widgetImageSize}
              />
            </FlexWidget>

            <TextWidget
              text={'scan'}
              style={styles.actionText}
              allowFontScaling
            />
          </FlexWidget>
        </FlexWidget>
      </FlexWidget>
    </FlexWidget>
  );
}

export { AndroidWidget };
