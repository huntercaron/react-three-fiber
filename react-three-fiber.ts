import * as React from 'react'
// import Reconciler from 'react-reconciler/cjs/react-reconciler.production.min'

type GLTF = any

export declare type State = object
export declare type PartialState<T extends State, K extends keyof T = keyof T> =
  | (Pick<T, K> | T)
  | ((state: T) => Pick<T, K> | T)
export declare type StateSelector<T extends State, U> = (state: T) => U
export declare type EqualityChecker<T> = (state: T, newState: T) => boolean
export declare type StateListener<T> = (state: T, previousState: T) => void
export declare type StateSliceListener<T> = (slice: T, previousSlice: T) => void
export interface Subscribe<T extends State> {
  (listener: StateListener<T>): () => void
  <StateSlice>(
    listener: StateSliceListener<StateSlice>,
    selector: StateSelector<T, StateSlice>,
    equalityFn?: EqualityChecker<StateSlice>,
  ): () => void
}
export declare type SetState<T extends State> = {
  <K extends keyof T>(partial: PartialState<T, K>, replace?: boolean): void
}
export declare type GetState<T extends State> = () => T
export declare type Destroy = () => void
export interface StoreApi<T extends State> {
  setState: SetState<T>
  getState: GetState<T>
  subscribe: Subscribe<T>
  destroy: Destroy
}
export declare type StateCreator<T extends State, CustomSetState = SetState<T>> = (
  set: CustomSetState,
  get: GetState<T>,
  api: StoreApi<T>,
) => T
export interface UseStore<T extends State> {
  (): T
  <U>(selector: StateSelector<T, U>, equalityFn?: EqualityChecker<U>): U
  setState: SetState<T>
  getState: GetState<T>
  subscribe: Subscribe<T>
  destroy: Destroy
}

/// <reference types="react" />
import * as THREE from 'three'
export declare type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]
export declare type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O
declare type Args<T> = T extends new (...args: any) => any ? ConstructorParameters<T> : T
export declare type Euler = THREE.Euler | Parameters<THREE.Euler['set']>
export declare type Matrix4 = THREE.Matrix4 | Parameters<THREE.Matrix4['set']>
export declare type Vector2 =
  | THREE.Vector2
  | Parameters<THREE.Vector2['set']>
  | Parameters<THREE.Vector2['setScalar']>[0]
export declare type Vector3 =
  | THREE.Vector3
  | Parameters<THREE.Vector3['set']>
  | Parameters<THREE.Vector3['setScalar']>[0]
export declare type Vector4 =
  | THREE.Vector4
  | Parameters<THREE.Vector4['set']>
  | Parameters<THREE.Vector4['setScalar']>[0]
export declare type Color = ConstructorParameters<typeof THREE.Color> | THREE.Color | number | string
export declare type ColorArray = typeof THREE.Color | Parameters<THREE.Color['set']>
export declare type Layers = THREE.Layers | Parameters<THREE.Layers['set']>[0]
export declare type Quaternion = THREE.Quaternion | Parameters<THREE.Quaternion['set']>
export interface NodeProps<T, P> {
  attach?: string
  attachArray?: string
  attachObject?: [target: string, name: string]
  args?: Args<P>
  children?: React.ReactNode
  ref?: React.Ref<React.ReactNode>
  key?: React.Key
  onUpdate?: (self: T) => void
}
export declare type Node<T, P> = Overwrite<Partial<T>, NodeProps<T, P>>
export declare type Object3DNode<T, P> = Overwrite<
  Node<T, P>,
  {
    position?: Vector3
    up?: Vector3
    scale?: Vector3
    rotation?: Euler
    matrix?: Matrix4
    quaternion?: Quaternion
    layers?: Layers
    dispose?: (() => void) | null
  }
> &
  EventHandlers
export declare type BufferGeometryNode<T extends THREE.BufferGeometry, P> = Overwrite<Node<T, P>, {}>
export declare type MaterialNode<T extends THREE.Material, P> = Overwrite<
  Node<T, P>,
  {
    color?: Color
  }
>
export declare type LightNode<T extends THREE.Light, P> = Overwrite<
  Object3DNode<T, P>,
  {
    color?: Color
  }
>
export declare type AudioListenerProps = Object3DNode<THREE.AudioListener, typeof THREE.AudioListener>
export declare type PositionalAudioProps = Object3DNode<THREE.PositionalAudio, typeof THREE.PositionalAudio>
export declare type MeshProps = Object3DNode<THREE.Mesh, typeof THREE.Mesh>
export declare type InstancedMeshProps = Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>
export declare type SceneProps = Object3DNode<THREE.Scene, typeof THREE.Scene>
export declare type SpriteProps = Object3DNode<THREE.Sprite, typeof THREE.Sprite>
export declare type LODProps = Object3DNode<THREE.LOD, typeof THREE.LOD>
export declare type SkinnedMeshProps = Object3DNode<THREE.SkinnedMesh, typeof THREE.SkinnedMesh>
export declare type SkeletonProps = Object3DNode<THREE.Skeleton, typeof THREE.Skeleton>
export declare type BoneProps = Object3DNode<THREE.Bone, typeof THREE.Bone>
export declare type LineSegmentsProps = Object3DNode<THREE.LineSegments, typeof THREE.LineSegments>
export declare type LineLoopProps = Object3DNode<THREE.LineLoop, typeof THREE.LineLoop>
export declare type PointsProps = Object3DNode<THREE.Points, typeof THREE.Points>
export declare type GroupProps = Object3DNode<THREE.Group, typeof THREE.Group>
export declare type ImmediateRenderObjectProps = Object3DNode<
  THREE.ImmediateRenderObject,
  typeof THREE.ImmediateRenderObject
>
export declare type CameraProps = Object3DNode<THREE.Camera, typeof THREE.Camera>
export declare type PerspectiveCameraProps = Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera>
export declare type OrthographicCameraProps = Object3DNode<THREE.OrthographicCamera, typeof THREE.OrthographicCamera>
export declare type CubeCameraProps = Object3DNode<THREE.CubeCamera, typeof THREE.CubeCamera>
export declare type ArrayCameraProps = Object3DNode<THREE.ArrayCamera, typeof THREE.ArrayCamera>
export declare type InstancedBufferGeometryProps = BufferGeometryNode<
  THREE.InstancedBufferGeometry,
  typeof THREE.InstancedBufferGeometry
>
export declare type BufferGeometryProps = BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>
export declare type BoxBufferGeometryProps = BufferGeometryNode<THREE.BoxBufferGeometry, typeof THREE.BoxBufferGeometry>
export declare type CircleBufferGeometryProps = BufferGeometryNode<
  THREE.CircleBufferGeometry,
  typeof THREE.CircleBufferGeometry
>
export declare type ConeBufferGeometryProps = BufferGeometryNode<
  THREE.ConeBufferGeometry,
  typeof THREE.ConeBufferGeometry
>
export declare type CylinderBufferGeometryProps = BufferGeometryNode<
  THREE.CylinderBufferGeometry,
  typeof THREE.CylinderBufferGeometry
>
export declare type DodecahedronBufferGeometryProps = BufferGeometryNode<
  THREE.DodecahedronBufferGeometry,
  typeof THREE.DodecahedronBufferGeometry
>
export declare type ExtrudeBufferGeometryProps = BufferGeometryNode<
  THREE.ExtrudeBufferGeometry,
  typeof THREE.ExtrudeBufferGeometry
>
export declare type IcosahedronBufferGeometryProps = BufferGeometryNode<
  THREE.IcosahedronBufferGeometry,
  typeof THREE.IcosahedronBufferGeometry
>
export declare type LatheBufferGeometryProps = BufferGeometryNode<
  THREE.LatheBufferGeometry,
  typeof THREE.LatheBufferGeometry
>
export declare type OctahedronBufferGeometryProps = BufferGeometryNode<
  THREE.OctahedronBufferGeometry,
  typeof THREE.OctahedronBufferGeometry
>
export declare type ParametricBufferGeometryProps = BufferGeometryNode<
  THREE.ParametricBufferGeometry,
  typeof THREE.ParametricBufferGeometry
>
export declare type PlaneBufferGeometryProps = BufferGeometryNode<
  THREE.PlaneBufferGeometry,
  typeof THREE.PlaneBufferGeometry
>
export declare type PolyhedronBufferGeometryProps = BufferGeometryNode<
  THREE.PolyhedronBufferGeometry,
  typeof THREE.PolyhedronBufferGeometry
>
export declare type RingBufferGeometryProps = BufferGeometryNode<
  THREE.RingBufferGeometry,
  typeof THREE.RingBufferGeometry
>
export declare type ShapeBufferGeometryProps = BufferGeometryNode<
  THREE.ShapeBufferGeometry,
  typeof THREE.ShapeBufferGeometry
>
export declare type SphereBufferGeometryProps = BufferGeometryNode<
  THREE.SphereBufferGeometry,
  typeof THREE.SphereBufferGeometry
>
export declare type TetrahedronBufferGeometryProps = BufferGeometryNode<
  THREE.TetrahedronBufferGeometry,
  typeof THREE.TetrahedronBufferGeometry
>
export declare type TextBufferGeometryProps = BufferGeometryNode<
  THREE.TextBufferGeometry,
  typeof THREE.TextBufferGeometry
>
export declare type TorusBufferGeometryProps = BufferGeometryNode<
  THREE.TorusBufferGeometry,
  typeof THREE.TorusBufferGeometry
>
export declare type TorusKnotBufferGeometryProps = BufferGeometryNode<
  THREE.TorusKnotBufferGeometry,
  typeof THREE.TorusKnotBufferGeometry
>
export declare type TubeBufferGeometryProps = BufferGeometryNode<
  THREE.TubeBufferGeometry,
  typeof THREE.TubeBufferGeometry
>
export declare type WireframeGeometryProps = BufferGeometryNode<THREE.WireframeGeometry, typeof THREE.WireframeGeometry>
export declare type ParametricGeometryProps = BufferGeometryNode<
  THREE.ParametricGeometry,
  typeof THREE.ParametricGeometry
>
export declare type TetrahedronGeometryProps = BufferGeometryNode<
  THREE.TetrahedronGeometry,
  typeof THREE.TetrahedronGeometry
>
export declare type OctahedronGeometryProps = BufferGeometryNode<
  THREE.OctahedronGeometry,
  typeof THREE.OctahedronGeometry
>
export declare type IcosahedronGeometryProps = BufferGeometryNode<
  THREE.IcosahedronGeometry,
  typeof THREE.IcosahedronGeometry
>
export declare type DodecahedronGeometryProps = BufferGeometryNode<
  THREE.DodecahedronGeometry,
  typeof THREE.DodecahedronGeometry
>
export declare type PolyhedronGeometryProps = BufferGeometryNode<
  THREE.PolyhedronGeometry,
  typeof THREE.PolyhedronGeometry
>
export declare type TubeGeometryProps = BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>
export declare type TorusKnotGeometryProps = BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
export declare type TorusGeometryProps = BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
export declare type TextGeometryProps = BufferGeometryNode<THREE.TextGeometry, typeof THREE.TextGeometry>
export declare type SphereGeometryProps = BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
export declare type RingGeometryProps = BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>
export declare type PlaneGeometryProps = BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
export declare type LatheGeometryProps = BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
export declare type ShapeGeometryProps = BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
export declare type ExtrudeGeometryProps = BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
export declare type EdgesGeometryProps = BufferGeometryNode<THREE.EdgesGeometry, typeof THREE.EdgesGeometry>
export declare type ConeGeometryProps = BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
export declare type CylinderGeometryProps = BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
export declare type CircleGeometryProps = BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
export declare type BoxGeometryProps = BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
export declare type MaterialProps = MaterialNode<THREE.Material, [THREE.MaterialParameters]>
export declare type ShadowMaterialProps = MaterialNode<THREE.ShadowMaterial, [THREE.ShaderMaterialParameters]>
export declare type SpriteMaterialProps = MaterialNode<THREE.SpriteMaterial, [THREE.SpriteMaterialParameters]>
export declare type RawShaderMaterialProps = MaterialNode<THREE.RawShaderMaterial, [THREE.ShaderMaterialParameters]>
export declare type ShaderMaterialProps = MaterialNode<THREE.ShaderMaterial, [THREE.ShaderMaterialParameters]>
export declare type PointsMaterialProps = MaterialNode<THREE.PointsMaterial, [THREE.PointsMaterialParameters]>
export declare type MeshPhysicalMaterialProps = MaterialNode<
  THREE.MeshPhysicalMaterial,
  [THREE.MeshPhysicalMaterialParameters]
>
export declare type MeshStandardMaterialProps = MaterialNode<
  THREE.MeshStandardMaterial,
  [THREE.MeshStandardMaterialParameters]
>
export declare type MeshPhongMaterialProps = MaterialNode<THREE.MeshPhongMaterial, [THREE.MeshPhongMaterialParameters]>
export declare type MeshToonMaterialProps = MaterialNode<THREE.MeshToonMaterial, [THREE.MeshToonMaterialParameters]>
export declare type MeshNormalMaterialProps = MaterialNode<
  THREE.MeshNormalMaterial,
  [THREE.MeshNormalMaterialParameters]
>
export declare type MeshLambertMaterialProps = MaterialNode<
  THREE.MeshLambertMaterial,
  [THREE.MeshLambertMaterialParameters]
>
export declare type MeshDepthMaterialProps = MaterialNode<THREE.MeshDepthMaterial, [THREE.MeshDepthMaterialParameters]>
export declare type MeshDistanceMaterialProps = MaterialNode<
  THREE.MeshDistanceMaterial,
  [THREE.MeshDistanceMaterialParameters]
>
export declare type MeshBasicMaterialProps = MaterialNode<THREE.MeshBasicMaterial, [THREE.MeshBasicMaterialParameters]>
export declare type MeshMatcapMaterialProps = MaterialNode<
  THREE.MeshMatcapMaterial,
  [THREE.MeshMatcapMaterialParameters]
>
export declare type LineDashedMaterialProps = MaterialNode<
  THREE.LineDashedMaterial,
  [THREE.LineDashedMaterialParameters]
>
export declare type LineBasicMaterialProps = MaterialNode<THREE.LineBasicMaterial, [THREE.LineBasicMaterialParameters]>
export declare type PrimitiveProps = {
  object: any
} & {
  [properties: string]: any
}
export declare type LightProps = LightNode<THREE.Light, typeof THREE.Light>
export declare type SpotLightShadowProps = Node<THREE.SpotLightShadow, typeof THREE.SpotLightShadow>
export declare type SpotLightProps = LightNode<THREE.SpotLight, typeof THREE.SpotLight>
export declare type PointLightProps = LightNode<THREE.PointLight, typeof THREE.PointLight>
export declare type RectAreaLightProps = LightNode<THREE.RectAreaLight, typeof THREE.RectAreaLight>
export declare type HemisphereLightProps = LightNode<THREE.HemisphereLight, typeof THREE.HemisphereLight>
export declare type DirectionalLightShadowProps = Node<
  THREE.DirectionalLightShadow,
  typeof THREE.DirectionalLightShadow
>
export declare type DirectionalLightProps = LightNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
export declare type AmbientLightProps = LightNode<THREE.AmbientLight, typeof THREE.AmbientLight>
export declare type LightShadowProps = Node<THREE.LightShadow, typeof THREE.LightShadow>
export declare type AmbientLightProbeProps = LightNode<THREE.AmbientLightProbe, typeof THREE.AmbientLightProbe>
export declare type HemisphereLightProbeProps = LightNode<THREE.HemisphereLightProbe, typeof THREE.HemisphereLightProbe>
export declare type LightProbeProps = LightNode<THREE.LightProbe, typeof THREE.LightProbe>
export declare type SpotLightHelperProps = Object3DNode<THREE.SpotLightHelper, typeof THREE.SpotLightHelper>
export declare type SkeletonHelperProps = Object3DNode<THREE.SkeletonHelper, typeof THREE.SkeletonHelper>
export declare type PointLightHelperProps = Object3DNode<THREE.PointLightHelper, typeof THREE.PointLightHelper>
export declare type HemisphereLightHelperProps = Object3DNode<
  THREE.HemisphereLightHelper,
  typeof THREE.HemisphereLightHelper
>
export declare type GridHelperProps = Object3DNode<THREE.GridHelper, typeof THREE.GridHelper>
export declare type PolarGridHelperProps = Object3DNode<THREE.PolarGridHelper, typeof THREE.PolarGridHelper>
export declare type DirectionalLightHelperProps = Object3DNode<
  THREE.DirectionalLightHelper,
  typeof THREE.DirectionalLightHelper
>
export declare type CameraHelperProps = Object3DNode<THREE.CameraHelper, typeof THREE.CameraHelper>
export declare type BoxHelperProps = Object3DNode<THREE.BoxHelper, typeof THREE.BoxHelper>
export declare type Box3HelperProps = Object3DNode<THREE.Box3Helper, typeof THREE.Box3Helper>
export declare type PlaneHelperProps = Object3DNode<THREE.PlaneHelper, typeof THREE.PlaneHelper>
export declare type ArrowHelperProps = Object3DNode<THREE.ArrowHelper, typeof THREE.ArrowHelper>
export declare type AxesHelperProps = Object3DNode<THREE.AxesHelper, typeof THREE.AxesHelper>
export declare type TextureProps = Node<THREE.Texture, typeof THREE.Texture>
export declare type VideoTextureProps = Node<THREE.VideoTexture, typeof THREE.VideoTexture>
export declare type DataTextureProps = Node<THREE.DataTexture, typeof THREE.DataTexture>
export declare type DataTexture3DProps = Node<THREE.DataTexture3D, typeof THREE.DataTexture3D>
export declare type CompressedTextureProps = Node<THREE.CompressedTexture, typeof THREE.CompressedTexture>
export declare type CubeTextureProps = Node<THREE.CubeTexture, typeof THREE.CubeTexture>
export declare type CanvasTextureProps = Node<THREE.CanvasTexture, typeof THREE.CanvasTexture>
export declare type DepthTextureProps = Node<THREE.DepthTexture, typeof THREE.DepthTexture>
export declare type RaycasterProps = Node<THREE.Raycaster, typeof THREE.Raycaster>
export declare type Vector2Props = Node<THREE.Vector2, typeof THREE.Vector2>
export declare type Vector3Props = Node<THREE.Vector3, typeof THREE.Vector3>
export declare type Vector4Props = Node<THREE.Vector4, typeof THREE.Vector4>
export declare type EulerProps = Node<THREE.Euler, typeof THREE.Euler>
export declare type Matrix3Props = Node<THREE.Matrix3, typeof THREE.Matrix3>
export declare type Matrix4Props = Node<THREE.Matrix4, typeof THREE.Matrix4>
export declare type QuaternionProps = Node<THREE.Quaternion, typeof THREE.Quaternion>
export declare type BufferAttributeProps = Node<THREE.BufferAttribute, typeof THREE.BufferAttribute>
export declare type InstancedBufferAttributeProps = Node<
  THREE.InstancedBufferAttribute,
  typeof THREE.InstancedBufferAttribute
>
export declare type ColorProps = Node<THREE.Color, ColorArray>
export declare type FogProps = Node<THREE.Fog, typeof THREE.Fog>
export declare type FogExp2Props = Node<THREE.FogExp2, typeof THREE.FogExp2>
export declare type ShapeProps = Node<THREE.Shape, typeof THREE.Shape>
declare global {
  namespace JSX {
    interface IntrinsicElements {
      audioListener: AudioListenerProps
      positionalAudio: PositionalAudioProps
      mesh: MeshProps
      instancedMesh: InstancedMeshProps
      scene: SceneProps
      sprite: SpriteProps
      lOD: LODProps
      skinnedMesh: SkinnedMeshProps
      skeleton: SkeletonProps
      bone: BoneProps
      lineSegments: LineSegmentsProps
      lineLoop: LineLoopProps
      points: PointsProps
      group: GroupProps
      immediateRenderObject: ImmediateRenderObjectProps
      camera: CameraProps
      perspectiveCamera: PerspectiveCameraProps
      orthographicCamera: OrthographicCameraProps
      cubeCamera: CubeCameraProps
      arrayCamera: ArrayCameraProps
      instancedBufferGeometry: InstancedBufferGeometryProps
      bufferGeometry: BufferGeometryProps
      boxBufferGeometry: BoxBufferGeometryProps
      circleBufferGeometry: CircleBufferGeometryProps
      coneBufferGeometry: ConeBufferGeometryProps
      cylinderBufferGeometry: CylinderBufferGeometryProps
      dodecahedronBufferGeometry: DodecahedronBufferGeometryProps
      extrudeBufferGeometry: ExtrudeBufferGeometryProps
      icosahedronBufferGeometry: IcosahedronBufferGeometryProps
      latheBufferGeometry: LatheBufferGeometryProps
      octahedronBufferGeometry: OctahedronBufferGeometryProps
      parametricBufferGeometry: ParametricBufferGeometryProps
      planeBufferGeometry: PlaneBufferGeometryProps
      polyhedronBufferGeometry: PolyhedronBufferGeometryProps
      ringBufferGeometry: RingBufferGeometryProps
      shapeBufferGeometry: ShapeBufferGeometryProps
      sphereBufferGeometry: SphereBufferGeometryProps
      tetrahedronBufferGeometry: TetrahedronBufferGeometryProps
      textBufferGeometry: TextBufferGeometryProps
      torusBufferGeometry: TorusBufferGeometryProps
      torusKnotBufferGeometry: TorusKnotBufferGeometryProps
      tubeBufferGeometry: TubeBufferGeometryProps
      wireframeGeometry: WireframeGeometryProps
      parametricGeometry: ParametricGeometryProps
      tetrahedronGeometry: TetrahedronGeometryProps
      octahedronGeometry: OctahedronGeometryProps
      icosahedronGeometry: IcosahedronGeometryProps
      dodecahedronGeometry: DodecahedronGeometryProps
      polyhedronGeometry: PolyhedronGeometryProps
      tubeGeometry: TubeGeometryProps
      torusKnotGeometry: TorusKnotGeometryProps
      torusGeometry: TorusGeometryProps
      textGeometry: TextGeometryProps
      sphereGeometry: SphereGeometryProps
      ringGeometry: RingGeometryProps
      planeGeometry: PlaneGeometryProps
      latheGeometry: LatheGeometryProps
      shapeGeometry: ShapeGeometryProps
      extrudeGeometry: ExtrudeGeometryProps
      edgesGeometry: EdgesGeometryProps
      coneGeometry: ConeGeometryProps
      cylinderGeometry: CylinderGeometryProps
      circleGeometry: CircleGeometryProps
      boxGeometry: BoxGeometryProps
      material: MaterialProps
      shadowMaterial: ShadowMaterialProps
      spriteMaterial: SpriteMaterialProps
      rawShaderMaterial: RawShaderMaterialProps
      shaderMaterial: ShaderMaterialProps
      pointsMaterial: PointsMaterialProps
      meshPhysicalMaterial: MeshPhysicalMaterialProps
      meshStandardMaterial: MeshStandardMaterialProps
      meshPhongMaterial: MeshPhongMaterialProps
      meshToonMaterial: MeshToonMaterialProps
      meshNormalMaterial: MeshNormalMaterialProps
      meshLambertMaterial: MeshLambertMaterialProps
      meshDepthMaterial: MeshDepthMaterialProps
      meshDistanceMaterial: MeshDistanceMaterialProps
      meshBasicMaterial: MeshBasicMaterialProps
      meshMatcapMaterial: MeshMatcapMaterialProps
      lineDashedMaterial: LineDashedMaterialProps
      lineBasicMaterial: LineBasicMaterialProps
      primitive: PrimitiveProps
      light: LightProps
      spotLightShadow: SpotLightShadowProps
      spotLight: SpotLightProps
      pointLight: PointLightProps
      rectAreaLight: RectAreaLightProps
      hemisphereLight: HemisphereLightProps
      directionalLightShadow: DirectionalLightShadowProps
      directionalLight: DirectionalLightProps
      ambientLight: AmbientLightProps
      lightShadow: LightShadowProps
      ambientLightProbe: AmbientLightProbeProps
      hemisphereLightProbe: HemisphereLightProbeProps
      lightProbe: LightProbeProps
      spotLightHelper: SpotLightHelperProps
      skeletonHelper: SkeletonHelperProps
      pointLightHelper: PointLightHelperProps
      hemisphereLightHelper: HemisphereLightHelperProps
      gridHelper: GridHelperProps
      polarGridHelper: PolarGridHelperProps
      directionalLightHelper: DirectionalLightHelperProps
      cameraHelper: CameraHelperProps
      boxHelper: BoxHelperProps
      box3Helper: Box3HelperProps
      planeHelper: PlaneHelperProps
      arrowHelper: ArrowHelperProps
      axesHelper: AxesHelperProps
      texture: TextureProps
      videoTexture: VideoTextureProps
      dataTexture: DataTextureProps
      dataTexture3D: DataTexture3DProps
      compressedTexture: CompressedTextureProps
      cubeTexture: CubeTextureProps
      canvasTexture: CanvasTextureProps
      depthTexture: DepthTextureProps
      raycaster: RaycasterProps
      vector2: Vector2Props
      vector3: Vector3Props
      vector4: Vector4Props
      euler: EulerProps
      matrix3: Matrix3Props
      matrix4: Matrix4Props
      quaternion: QuaternionProps
      bufferAttribute: BufferAttributeProps
      instancedBufferAttribute: InstancedBufferAttributeProps
      color: ColorProps
      fog: FogProps
      fogExp2: FogExp2Props
      shape: ShapeProps
    }
  }
}
export {}

export interface Intersection extends THREE.Intersection {
  eventObject: THREE.Object3D
}
export declare type Subscription = {
  ref: React.MutableRefObject<RenderCallback>
  priority: number
}
export declare type Dpr = number | [min: number, max: number]
export declare type Size = {
  width: number
  height: number
}
export declare type Viewport = Size & {
  initialDpr: number
  dpr: number
  factor: number
  distance: number
  aspect: number
}
export declare type Camera = THREE.OrthographicCamera | THREE.PerspectiveCamera
export declare type Raycaster = THREE.Raycaster & {
  enabled: boolean
  filter?: FilterFunction
  computeOffsets?: ComputeOffsetsFunction
}
export declare type RenderCallback = (state: RootState, delta: number) => void
export declare type Performance = {
  current: number
  min: number
  max: number
  debounce: number
  regress: () => void
}
export declare const isRenderer: (def: THREE.WebGLRenderer) => def is THREE.WebGLRenderer
export declare const isOrthographicCamera: (def: THREE.Camera) => def is THREE.OrthographicCamera
export declare type InternalState = {
  active: boolean
  priority: number
  frames: number
  lastProps: StoreProps
  interaction: THREE.Object3D[]
  hovered: Map<string, DomEvent>
  subscribers: Subscription[]
  capturedMap: Map<number, Map<THREE.Object3D, Intersection>>
  initialClick: [x: number, y: number]
  initialHits: THREE.Object3D[]
  subscribe: (callback: React.MutableRefObject<RenderCallback>, priority?: number) => () => void
}
export declare type RootState = {
  gl: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: Camera
  raycaster: Raycaster
  mouse: THREE.Vector2
  clock: THREE.Clock
  vr: boolean
  linear: boolean
  flat: boolean
  frameloop: 'always' | 'demand' | 'never'
  performance: Performance
  size: Size
  viewport: Viewport & {
    getCurrentViewport: (camera?: Camera, target?: THREE.Vector3, size?: Size) => Omit<Viewport, 'dpr' | 'initialDpr'>
  }
  set: SetState<RootState>
  get: GetState<RootState>
  invalidate: () => void
  advance: (timestamp: number, runGlobalEffects?: boolean) => void
  setSize: (width: number, height: number) => void
  setDpr: (dpr: Dpr) => void
  onPointerMissed?: (event: ThreeEvent<PointerEvent>) => void
  events: EventManager<any>
  internal: InternalState
}
export declare type FilterFunction = (items: THREE.Intersection[], state: RootState) => THREE.Intersection[]
export declare type ComputeOffsetsFunction = (
  event: any,
  state: RootState,
) => {
  offsetX: number
  offsetY: number
}
export declare type StoreProps = {
  gl: THREE.WebGLRenderer
  size: Size
  vr?: boolean
  shadows?: boolean | Partial<THREE.WebGLShadowMap>
  linear?: boolean
  flat?: boolean
  orthographic?: boolean
  frameloop?: 'always' | 'demand' | 'never'
  performance?: Partial<Omit<Performance, 'regress'>>
  dpr?: Dpr
  clock?: THREE.Clock
  raycaster?: Partial<Raycaster>
  camera?:
    | Camera
    | Partial<
        Object3DNode<THREE.Camera, typeof THREE.Camera> &
          Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera> &
          Object3DNode<THREE.OrthographicCamera, typeof THREE.OrthographicCamera>
      >
  onPointerMissed?: (event: ThreeEvent<PointerEvent>) => void
}
export declare type ApplyProps = (
  instance: Instance,
  newProps: InstanceProps,
  oldProps?: InstanceProps,
  accumulative?: boolean,
) => void
declare const context: React.Context<UseStore<RootState>>
declare const createStore: (
  applyProps: ApplyProps,
  invalidate: (state?: RootState | undefined) => void,
  advance: (timestamp: number, runGlobalEffects?: boolean | undefined, state?: RootState | undefined) => void,
  props: StoreProps,
) => UseStore<RootState>
export { createStore, context }

export interface Intersection extends THREE.Intersection {
  eventObject: THREE.Object3D
}
export interface IntesectionEvent<TSourceEvent> extends Intersection {
  intersections: Intersection[]
  stopped: boolean
  unprojectedPoint: THREE.Vector3
  ray: THREE.Ray
  camera: Camera
  stopPropagation: () => void
  sourceEvent: TSourceEvent
  nativeEvent: TSourceEvent
  delta: number
  spaceX: number
  spaceY: number
}

export declare type ThreeEvent<TEvent> = TEvent & IntesectionEvent<TEvent>
export declare type DomEvent = ThreeEvent<PointerEvent | MouseEvent | WheelEvent>
export declare type Events = {
  onClick: EventListener
  onContextMenu: EventListener
  onDoubleClick: EventListener
  onWheel: EventListener
  onPointerDown: EventListener
  onPointerUp: EventListener
  onPointerLeave: EventListener
  onPointerMove: EventListener
  onPointerCancel: EventListener
  onLostPointerCapture: EventListener
}
export declare type EventHandlers = {
  onClick?: (event: ThreeEvent<MouseEvent>) => void
  onContextMenu?: (event: ThreeEvent<MouseEvent>) => void
  onDoubleClick?: (event: ThreeEvent<MouseEvent>) => void
  onPointerUp?: (event: ThreeEvent<PointerEvent>) => void
  onPointerDown?: (event: ThreeEvent<PointerEvent>) => void
  onPointerOver?: (event: ThreeEvent<PointerEvent>) => void
  onPointerOut?: (event: ThreeEvent<PointerEvent>) => void
  onPointerEnter?: (event: ThreeEvent<PointerEvent>) => void
  onPointerLeave?: (event: ThreeEvent<PointerEvent>) => void
  onPointerMove?: (event: ThreeEvent<PointerEvent>) => void
  onPointerMissed?: (event: ThreeEvent<PointerEvent>) => void
  onPointerCancel?: (event: ThreeEvent<PointerEvent>) => void
  onWheel?: (event: ThreeEvent<WheelEvent>) => void
}
export interface EventManager<TTarget> {
  connected: TTarget | boolean
  handlers?: Events
  connect?: (target: TTarget) => void
  disconnect?: () => void
}
export declare function removeInteractivity(store: UseStore<RootState>, object: THREE.Object3D): void
export declare function createEvents(store: UseStore<RootState>): {
  handlePointer: (name: string) => (event: DomEvent) => void
}

export interface Loader<T> extends THREE.Loader {
  load(
    url: string,
    onLoad?: (result: T) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): unknown
}
declare type Extensions = (loader: THREE.Loader) => void
declare type LoaderResult<T> = T extends any[] ? Loader<T[number]> : Loader<T>
declare type ConditionalType<Child, Parent, Truthy, Falsy> = Child extends Parent ? Truthy : Falsy
declare type BranchingReturn<T, Parent, Coerced> = ConditionalType<T, Parent, Coerced, T>
export declare type ObjectMap = {
  nodes: {
    [name: string]: THREE.Object3D
  }
  materials: {
    [name: string]: THREE.Material
  }
}
export declare function useThree<T = RootState>(
  selector?: StateSelector<RootState, T>,
  equalityFn?: EqualityChecker<T>,
): T
export declare function useFrame(callback: RenderCallback, renderPriority?: number): null
export declare function useGraph(object: THREE.Object3D): ObjectMap
export declare function useLoader<T, U extends string | string[]>(
  Proto: new () => LoaderResult<T>,
  input: U,
  extensions?: Extensions,
  onProgress?: (event: ProgressEvent<EventTarget>) => void,
): U extends any[] ? BranchingReturn<T, GLTF, GLTF & ObjectMap>[] : BranchingReturn<T, GLTF, GLTF & ObjectMap>
export declare namespace useLoader {
  var preload: <T, U extends string | string[]>(
    Proto: new () => LoaderResult<T>,
    input: U,
    extensions?: Extensions | undefined,
  ) => undefined
}
export {}

export interface Props
  extends Omit<RenderProps<HTMLCanvasElement>, 'size' | 'events'>,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fallback?: React.ReactNode
  size: {
    width: number
    height: number
  }
  events?: (store: UseStore<RootState>) => EventManager<any>
}

export declare const Canvas: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>

export declare function createPointerEvents(store: UseStore<RootState>): EventManager<HTMLElement>

declare const roots: Map<Element, Root>
declare const modes: readonly ['legacy', 'blocking', 'concurrent']
declare const invalidate: (state?: RootState | undefined) => void,
  advance: (timestamp: number, runGlobalEffects?: boolean, state?: RootState | undefined) => void
export declare type RenderProps<TCanvas extends Element> = Omit<StoreProps, 'gl' | 'events' | 'size'> & {
  gl?: THREE.WebGLRenderer | THREE.WebGLRendererParameters
  events?: (store: UseStore<RootState>) => EventManager<TCanvas>
  size?: Size
  mode?: typeof modes[number]
  onCreated?: (state: RootState) => void
}
declare function render<TCanvas extends Element>(
  element: React.ReactNode,
  canvas: TCanvas,
  { gl, size, mode, events, onCreated, ...props }?: RenderProps<TCanvas>,
): UseStore<RootState>
declare function unmountComponentAtNode<TElement extends Element>(
  canvas: TElement,
  callback?: (canvas: TElement) => void,
): void
declare function dispose<
  TObj extends {
    dispose?: () => void
    type?: string
    [key: string]: any
  },
>(obj: TObj): void
declare const act: any
declare function createPortal(
  children: React.ReactNode,
  container: THREE.Object3D,
  implementation?: any,
  key?: any,
): React.ReactNode

export declare type Root = {
  fiber: any
  store: UseStore<RootState>
}
export declare type LocalState = {
  root: UseStore<RootState>
  objects: Instance[]
  instance?: boolean
  handlers?: EventHandlers
  memoizedProps: {
    [key: string]: any
  }
}
export declare type ClassConstructor = {
  new (): void
}
export declare type BaseInstance = Omit<
  THREE.Object3D,
  'parent' | 'children' | 'attach' | 'add' | 'remove' | 'raycast'
> & {
  __r3f: LocalState
  parent: Instance | null
  children: Instance[]
  attach?: string
  remove: (...object: Instance[]) => Instance
  add: (...object: Instance[]) => Instance
  raycast?: (raycaster: THREE.Raycaster, intersects: THREE.Intersection[]) => void
}
export declare type Instance = BaseInstance & {
  [key: string]: any
}
export declare type InstanceProps = {
  [key: string]: unknown
} & {
  args?: any[]
  object?: object
  visible?: boolean
  dispose?: null
  attach?: string
}
declare let extend: (objects: object) => void
declare function prepare<T = THREE.Object3D>(object: T, state?: Partial<LocalState>): T
declare function createRenderer<TCanvas>(roots: Map<TCanvas, Root>): {
  reconciler: any
  applyProps: (instance: Instance, newProps: InstanceProps, oldProps?: InstanceProps, accumulative?: boolean) => void
}
export { prepare, createRenderer, extend }
