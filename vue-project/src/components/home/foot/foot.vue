<template>
    <div id="foot">
        <router-link to="/">
            <p ref="index"><i class="iconfont icon-shouye"></i><span>首页</span></p>
        </router-link>
        <router-link to="/list">
            <p ref="list"><i class="iconfont icon-03 j-footfl"></i><span>品牌</span></p>
        </router-link>
        <router-link to="/list">
            <p ref="list"><i class="iconfont icon-fenlei j-footfl"></i><span>分类</span></p>
        </router-link>
        <router-link to="/car">
            <p ref="car"><i class="iconfont icon-gouwudai"></i><span>购物袋</span></p>
        </router-link>
        <router-link to="/my"> 
            <p ref="my"><i class="iconfont icon-xiaolian j-footmy"></i><span>我的</span></p>
        </router-link>
    </div>
</template>

<script type="text/javascript">
    import './foot.scss'
    export default{
        mounted(){
                // console.log(this.$router.history.current.path)
                if(this.$router.history.current.path=='/'){
                    // console.log(this.$refs.index);
                    this.$refs.index.classList.add('active');

                }else if(this.$router.history.current.path=='/list'){
                     this.$refs.list.classList.add('active');
                }else if(this.$router.history.current.path=='/car'){
                     this.$refs.car.classList.add('active');
                }else if(this.$router.history.current.path=='/my'){
                     this.$refs.my.classList.add('active');
                }

        }
    }



</script>