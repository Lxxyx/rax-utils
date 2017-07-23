/// <reference types="react" />
/// <reference types="react-dom" />

interface CommonProps {}

interface CommonStyle extends ImageStyle, TextStyle {}

interface CommonProps {
  style?: StyleProp<CommonStyle>
}

declare module 'rax' {
  // export function createElement: React.createElement
  // export var Component: React.Component
  export = {
    createElement: React.createElement,
    cloneElement: React.cloneElement,
    isValidElement: React.isValidElement,
    createFactory: React.createFactory,
    Component: React.Component,
    PureComponent: React.PureComponent,
    PropTypes: React.PropTypes,
    render: ReactDOM.render,
    findDOMNode: ReactDOM.findDOMNode,
    unmountComponentAtNode: ReactDOM.unmountComponentAtNode,
    findComponentInstance: Function,
    version: React.version
  }
}

declare module 'rax-button' {
  export interface ButtonProps extends CommonProps {
    // 点击事件
    onPress?: Function
  }

  export default class Button extends React.Component<ButtonProps, any> {}
}

declare module 'rax-calendar' {
  export interface CalendarProps extends CommonProps {
    // 可选的起始时间
    startDate?: string

    // 可选的结束时间
    endDate?: string

    // 月份的渲染格式
    titleFormat?: string

    // 返回的日期格式
    dateFormat?: string

    // 把周几作为一个星期的开始
    weekStart?: number

    // 月份切换按钮的显示文案
    prevButtonText?: string

    // 月份切换按钮的显示文案
    nextButtonText?: string

    // 选中某个日期
    onDateSelect?: Function

    // 上一个月
    onTouchPrev?: Function

    // 下一个月
    onTouchNext?: Function
  }

  export default class Calendar extends React.Component<CalendarProps, any> {}
}

declare module 'rax-canvas' {
  export interface CanvasProps extends CommonProps {}

  export default class Canvas extends React.Component<CanvasProps, any> {}
}

declare module 'rax-checkbox' {
  export interface CheckBoxProps extends CommonProps {
    // 选中状态
    checked?: boolean

    // 选中图片
    checkedImage?: string

    // 非选中图片
    uncheckedImage?: string

    // 选择框容器样式
    containerStyle?: Object

    // 选择框图片样式
    checkboxStyle?: Object

    // 选择事件
    onChange?: Function
  }

  export default class CheckBox extends React.Component<CheckBoxProps, any> {}
}

declare module 'rax-countdown' {
  export interface CountdownProps extends CommonProps {
    // 倒计时剩余时间,单位为"毫秒"
    timeRemaining?: number

    // 倒计时的间隔,单位为"毫秒"
    interval?: number

    // 倒计时展示模板,默认为'{d}天{h}时{m}分{s}秒'
    tpl?: string

    // 自定义格式化剩余时间的方法,非undefined时tpl失效,处理剩余时间的展示
    formatFunc?: Function

    // 倒计时变化时调用的方法
    onTick?: Function

    // 倒计时完成时调用的方法
    onComplete?: Function

    // 时间-数字的样式
    timeStyle?: Object

    // 秒最后一位样式
    secondStyle?: Object

    // 时间-单位的样式
    textStyle?: Object

    // 各时间区块的样式
    timeWrapStyle?: Object

    // 各时间区块背景(可加背景图)
    timeBackground?: Object

    // 各时间区块背景样式
    timeBackgroundStyle?: Object
  }

  export default class Countdown extends React.Component<CountdownProps, any> {}
}

declare module 'rax-counter' {
  export interface counterProps extends CommonProps {
    // 默认数值
    value?: number

    // 起始值
    start?: number

    // 终止值
    end?: number

    // 改变值时触发
    onChange?: Function

    // 渲染完成触发
    onComplete?: Function
  }

  export default class counter extends React.Component<counterProps, any> {}
}

declare module 'rax-datepicker' {
  export interface DatePickerProps extends CommonProps {
    // 选中值（示例：2017-01-01）
    selectedValue?: string

    // 日期切换
    onDateChange?: Function

    // 日期选择最小范围（示例：2017-01-01）
    minimumDate?: string

    // 日期选择最大范围（示例：2017-01-01）
    maximumDate?: string
  }

  export default class DatePicker extends React.Component<
    DatePickerProps,
    any
  > {}
}

declare module 'rax-gotop' {
  export interface GoTopProps extends CommonProps {
    // 图标文字内容
    name?: string

    // 图标 Icon URL
    icon?: string

    // 返回顶部container宽度
    iconWidth?: string

    // 返回顶部container高度
    iconHeight?: string

    // 返回顶部container border颜色
    borderColor?: string

    // 离底部的距离
    bottom?: number

    // icon显示回调
    onShow?: Function

    // icon消失回调
    onHide?: Function
  }

  export default class GoTop extends React.Component<GoTopProps, any> {}
}

declare module 'rax-image' {
  export interface ImageProps extends CommonProps {
    // 设置图片的 uri
    scoure?: Object

    // 决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小
    resizeMode?: string
  }

  export default class Image extends React.Component<ImageProps, any> {}
}

declare module 'rax-link' {
  export interface LinkProps extends CommonProps {
    // 响应点击事件
    onPress?: Function
  }

  export default class Link extends React.Component<LinkProps, any> {}
}

declare module 'rax-listview' {
  export interface ListViewProps extends CommonProps {
    // 模板方法（必需）
    renderRow?: Function

    // 需要渲染的数据，与 renderRow 配合使用（必需）
    dataSource?: Array<any>

    // 滚动到底部触发事件，将修改后的数据付给 data
    onEndReached?: Function

    // 距离多少开始加载下一屏，数字单位默认 rem
    onEndReachedThreshold?: number

    // 滚动时触发的事件，返回当前滚动的水平垂直距离
    onScroll?: Function

    // 列表头部 需返回要渲染的标签
    renderHeader?: Function

    // 列表底部 需返回要渲染的标签 (可以在此处实现 loading 菊花效果)
    renderFooter?: Function

    // 返回 listview 的外层包裹容器
    renderScrollComponent?: Function
  }

  export default class ListView extends React.Component<ListViewProps, any> {}
}

declare module 'rax-modal' {
  export interface ModalProps extends CommonProps {
    // 显示的时候触发回调
    onShow?: Function

    // 隐藏的时候触发回调
    onHide?: Function

    // Modal 内容的 style
    contentStyle?: Object

    // 模态框是否可见
    visible?: boolean
  }

  export default class Modal extends React.Component<ModalProps, any> {}
}

declare module 'rax-multirow' {
  export interface MultiRowProps extends CommonProps {
    // 模板方法（必需）
    renderCell?: Function

    // 需要渲染的数据，与 renderCell 配合使用（必需）
    dataSource?: Array<any>

    // 每行包含几列，默认1列（必需）
    cells?: number
  }

  export default class MultiRow extends React.Component<MultiRowProps, any> {}
}

declare module 'rax-picker' {
  export interface PickerProps extends CommonProps {
    // 选中值
    selectedValue?: string

    // 选项切换
    onValueChange?: Function
  }

  export default class Picker extends React.Component<PickerProps, any> {}
}

declare module 'rax-picture' {
  export interface PictureProps extends CommonProps {
    // 图片来源（必需）
    source?: Object

    // 决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。下见说明。
    resizeMode?: string

    // Picture 是一个 PureComponent ，它的 shouldComponentUpdate 决定了当且仅当 porps.source.uri 有变化时才会重新 render。如果你想忽略它的 shouldComponentUpdate，则传入 forceUpdate={true}
    forceUpdate?: boolean

    // 图片真实宽度，单位 px
    width?: number

    // 图片真实高度，单位 px
    height?: number

    // （web端有效）根据图像是否在可视范围内延迟加载图像，Web 端需引入 framework.web.js 脚本
    lazyload?: boolean

    // （web端有效）在高分辨率下使用二倍图
    autoPixelRatio?: boolean

    // （web端有效）lazyload 时显示的背景图 URL
    placeholder?: string

    // （web端有效）图像 URL 自动删除协议头
    autoRemoveScheme?: boolean
  }

  export default class Picture extends React.Component<PictureProps, any> {}
}

declare module 'rax-player' {
  export interface PlayerProps extends CommonProps {
    // 视频地址（必填）
    src?: string

    // 封面图地址（必填）
    poster?: string

    // 如果出现该属性，则显示控制器控件（该控制项只在h5下生效）
    controls?: string

    // 控制条是否带有全局播放按钮（该属性只对iOS-h5生效，Android-h5、iOS-weex默认带有，Android-weex没有全屏功能）
    hasFullScreen?: boolean

    // 是否强制使用原生全屏方法(该属性只对iOS-h5生效，Android-h5、iOS-weex使用默认全屏，Android-weex没有全屏功能)
    originFullscreen?: boolean

    // 如果出现该属性，则显示开始暂停button
    startBtn?: string

    // 如果出现该属性，则视频在就绪后马上播放
    autoPlay?: boolean

    // video播放结束时间处理方法
    onVideoFinish?: Function

    // video播放时的处理方法
    onVideoPlay?: Function

    // video暂停时的处理方法
    onVideoPause?: Function

    // video播放失败时的处理方法
    onVideoFail?: Function
  }

  export default class Player extends React.Component<PlayerProps, any> {}
}

declare module 'rax-recyclerview' {
  export interface RecyclerViewProps extends CommonProps {
    // 滚动到底部触发事件，将修改后的数据付给 data
    onEndReached?: Function

    // 距离多少开始加载下一屏，数字单位默认 rem
    onEndReachedThreshold?: number

    // 滚动时触发的事件，返回当前滚动的水平垂直距离
    onScroll?: Function
  }

  export default class RecyclerView extends React.Component<
    RecyclerViewProps,
    any
  > {}
}

declare module 'rax-refreshcontrol' {
  export interface RefreshControlProps extends CommonProps {
    // 是否显示
    refreshing?: string

    // 监听下拉刷新的行为
    onRefresh?: Function
  }

  export default class RefreshControl extends React.Component<
    RefreshControlProps,
    any
  > {}
}

declare module 'rax-scrollview' {
  export interface ScrollViewProps extends CommonProps {
    // 这个属性控制在滚动过程中，scroll事件被调用的频率（默认值为100），用于滚动的节流
    scrollEventThrottle?: number

    // 设置为横向滚动
    horizontal?: boolean

    // 是否允许出现水平滚动条，默认true
    showsHorizontalScrollIndicator?: boolean

    // 是否允许出现垂直滚动条，默认true
    showsVerticalScrollIndicator?: boolean

    // 设置加载更多的偏移，默认值为500
    onEndReachedThreshold?: number

    // 滚动区域还剩 onEndReachedThreshold 的长度时触发
    onEndReached?: Function

    // 滚动时触发的事件，返回当前滚动的水平垂直距离
    onScroll?: Function
  }

  export default class ScrollView extends React.Component<
    ScrollViewProps,
    any
  > {}
}

declare module 'rax-slider' {
  export interface SliderProps extends CommonProps {
    // Slider的宽度（必填）
    width?: string

    // Slider的高度（必填）
    height?: string

    // Slider是否自动播放
    autoPlay?: boolean

    // 是否显示分页的小圆点点
    showsPagination?: boolean

    // 自己定义小圆点点的样式，否则默认样式居中
    paginationStyle?: Object

    // 是否是循环播放（web）
    loop?: boolean

    // 指定默认初始化第几个（在weex安卓下有兼容问题，需要节点渲染完成后异步调用，暂不推荐使用）
    index?: number

    // 自动播放的间隔时间
    autoPlayInterval?: number
  }

  export default class Slider extends React.Component<SliderProps, any> {}
}

declare module 'rax-switch' {
  export interface SwitchProps extends CommonProps {
    // 设置开关打开的背景色
    onTintColor?: string

    // 设置开关关闭时的背景色
    tintColor?: string

    // 开关圆形按钮的背景色
    thumbTintColor?: string

    // 开关是否可交互  true
    disabled?: boolean

    // 开关默认状态开启或关闭  true
    value?: boolean

    // 值改变时调用此函数
    onValueChange?: Function
  }

  export default class Switch extends React.Component<SwitchProps, any> {}
}

declare module 'rax-tabheader' {
  export interface TabHeaderProps extends CommonProps {
    // tab 选项的数据（必填）
    dataSource?: Array<any>

    // 渲染每项的模板（必填）
    renderItem?: Function

    // 300
    itemWidth?: string

    // 选中导航项的模版
    renderSelect?: Function

    // 选中某一 tab 事件
    onSelect?: Function

    // 选中的导航项，从0开始
    selected?: number

    // 导航默认展现样式
    type?: string

    // 导航默认展现样式
    containerStyle?: Object

    // 单个 tab 展现样式
    itemStyle?: Object

    // 单个选中 tab 展现样式
    itemSelectedStyle?: Object

    // 滑动色块展现样式
    animBuoyStyle?: Object

    // 下拉列表的列数
    dropDownCols?: number
  }

  export default class TabHeader extends React.Component<TabHeaderProps, any> {}
}

declare module 'rax-textinput' {
  export interface TextInputProps extends CommonProps {
    // 定义该属性文本框可以输入多行文字
    multiline?: boolean

    // 为元素添加标识
    accessibilityLabel?: string

    // 添加开启自动完成功能
    autoComplete?: boolean

    // 添加开启获取焦点
    autoFocus?: boolean

    // 默认为true 如果为fase则文本框不可编辑
    editable?: boolean

    // 设置弹出哪种软键盘 可用的值有default ascii-capable numbers-and-punctuation url number-pad phone-pad name-phone-pad email-address decimal-pad twitter web-search numeric
    keyboardType?: string

    // 设置最大可输入值
    maxLength?: number

    // 当文本框为mutiline时设置最多的行数
    maxNumberOfLines?: number

    // 同上设置行数
    numberOfLines?: number

    // 设置文本框提示
    placeholder?: string

    // 文本框内容密码显示
    password?: boolean

    // 同上文本框内容密码显示
    secureTextEntry?: boolean

    // 文本框的文字内容 (受控)
    value?: string

    // 文本框的文字内容（非受控）
    defaultValue?: string

    // 文本框失焦时调用此函数。onBlur={() => console.log('失焦啦')}
    onBlur?: Function

    // 文本框获得焦点时调用此函数
    onFocus?: Function

    // 文本框内容变化时调用此函数（用户输入完成时触发。通常在 blur 事件之后）
    onChange?: Function

    // 文本框输入内容时调用此函数
    onInput?: Function
  }

  export default class TextInput extends React.Component<TextInputProps, any> {}
}

declare module 'rax-text' {
  export interface TextProps extends CommonProps {
    // 行数
    numberOfLines?: number
  }

  export default class Text extends React.Component<TextProps, any> {}
}

declare module 'rax-timepicker' {
  export interface TimePickerProps extends CommonProps {
    // 选中值（示例：01:01）
    selectedValue?: string

    // 时间选择
    onTimeChange?: Function
  }

  export default class TimePicker extends React.Component<
    TimePickerProps,
    any
  > {}
}

declare module 'rax-touchable' {
  export interface TouchableProps extends CommonProps {
    // 点击事件
    onPress?: Function
  }

  export default class Touchable extends React.Component<TouchableProps, any> {}
}

declare module 'rax-video' {
  export interface VideoProps extends CommonProps {
    // 设置视频自动播放
    autoPlay?: boolean

    // 视频地址
    src?: string
  }

  export default class Video extends React.Component<VideoProps, any> {}
}

declare module 'rax-view' {
  export interface ViewProps extends CommonProps {}

  export default class View extends React.Component<ViewProps, any> {}
}

declare module 'rax-waterfall' {
  export interface WaterFallProps extends CommonProps {
    // 瀑布流数组，需要传入模块高度（必填）
    dataSource?: Array<any>

    // 渲染每项的模板（必填）
    renderItem?: Function

    // 渲染 header 部分
    renderHeader?: Function

    // 渲染 footer 部分
    renderFooter?: Function

    // 列宽
    columnWidth?: number

    // 列数
    columnCount?: number

    // 列间距
    columnGap?: number

    // 滚动到底部触发事件
    onEndReached?: Function

    // 触发懒加载距离
    onEndReachedThreshold?: number
  }

  export default class WaterFall extends React.Component<WaterFallProps, any> {}
}

// ViewStyle

interface ViewStyle extends FlexStyle, TransformsStyle {
  backfaceVisibility?: 'visible' | 'hidden'
  backgroundColor?: string
  borderBottomColor?: string
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderBottomWidth?: number
  borderColor?: string
  borderLeftColor?: string
  borderRadius?: number
  borderRightColor?: string
  borderRightWidth?: number
  borderStyle?: 'solid' | 'dotted' | 'dashed'
  borderTopColor?: string
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderTopWidth?: number
  opacity?: number
  overflow?: 'visible' | 'hidden'
  shadowColor?: string
  shadowOffset?: { width: number; height: number }
  shadowOpacity?: number
  shadowRadius?: number
  elevation?: number
  testID?: string
}

type FlexAlignType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'

/**
 * Flex Prop Types
 * @see https://facebook.github.io/react-native/docs/flexbox.html#proptypes
 * @see LayoutPropTypes.js
 */
interface FlexStyle {
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
  alignItems?: FlexAlignType
  alignSelf?: 'auto' | FlexAlignType
  aspectRatio?: number
  borderBottomWidth?: number
  borderLeftWidth?: number
  borderRightWidth?: number
  borderTopWidth?: number
  borderWidth?: number
  bottom?: number | string
  flex?: number
  flexBasis?: number | string
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  flexGrow?: number
  flexShrink?: number
  flexWrap?: 'wrap' | 'nowrap'
  height?: number | string
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  left?: number | string
  margin?: number | string
  marginBottom?: number | string
  marginHorizontal?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  marginTop?: number | string
  marginVertical?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
  overflow?: 'visible' | 'hidden' | 'scroll'
  padding?: number | string
  paddingBottom?: number | string
  paddingHorizontal?: number | string
  paddingLeft?: number | string
  paddingRight?: number | string
  paddingTop?: number | string
  paddingVertical?: number | string
  position?: 'absolute' | 'relative'
  right?: number | string
  top?: number | string
  width?: number | string
  zIndex?: number

  /**
   * @platform ios
   */
  direction?: 'inherit' | 'ltr' | 'rtl'
}

interface PerpectiveTransform {
  perspective: number
}

interface RotateTransform {
  rotate: string
}

interface RotateXTransform {
  rotateX: string
}

interface RotateYTransform {
  rotateY: string
}

interface RotateZTransform {
  rotateZ: string
}

interface ScaleTransform {
  scale: number
}

interface ScaleXTransform {
  scaleX: number
}

interface ScaleYTransform {
  scaleY: number
}

interface TranslateXTransform {
  translateX: number
}

interface TranslateYTransform {
  translateY: number
}

interface SkewXTransform {
  skewX: string
}

interface SkewYTransform {
  skewY: string
}

interface TransformsStyle {
  transform?: (
    | PerpectiveTransform
    | RotateTransform
    | RotateXTransform
    | RotateYTransform
    | RotateZTransform
    | ScaleTransform
    | ScaleXTransform
    | ScaleYTransform
    | TranslateXTransform
    | TranslateYTransform
    | SkewXTransform
    | SkewYTransform)[]
  transformMatrix?: Array<number>
  rotation?: number
  scaleX?: number
  scaleY?: number
  translateX?: number
  translateY?: number
}

interface TextStyle extends ViewStyle {
  color?: string
  fontFamily?: string
  fontSize?: number
  fontStyle?: 'normal' | 'italic'
  /**
   * Specifies font weight. The values 'normal' and 'bold' are supported
   * for most fonts. Not all fonts have a variant for each of the numeric
   * values, in that case the closest one is chosen.
   */
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  letterSpacing?: number
  lineHeight?: number
  /**
   * Specifies text alignment.
   * The value 'justify' is only supported on iOS.
   */
  textAlign?: 'auto' | 'left' | 'right' | 'center'
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed'
  textDecorationColor?: string
  textShadowColor?: string
  textShadowOffset?: { width: number; height: number }
  textShadowRadius?: number
  testID?: string
}

interface ImageStyle extends FlexStyle, TransformsStyle {
  backfaceVisibility?: 'visible' | 'hidden'
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  backgroundColor?: string
  borderColor?: string
  borderWidth?: number
  borderRadius?: number
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  overflow?: 'visible' | 'hidden'
  overlayColor?: string
  tintColor?: string
  opacity?: number
}

type Falsy = undefined | null | false
interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}
interface RegisteredStyle<T> extends Number {}
type StyleProp<T> =
  | T
  | RegisteredStyle<T>
  | RecursiveArray<T | RegisteredStyle<T> | Falsy>
  | Falsy
