  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-hoverIntent/jquery.hoverIntent.js at master · briancherne/jquery-hoverIntent · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="4w4lhHOdqgvRbojJfBku/Et81LGEOB0OWvvApJ2VARk=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-159290696eb4150b6abdc4ac7fa8da500bcca10f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-0d894c14747f62f9900dc75a936d6f8979d8eb92.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-76cc892ab78e865420ada4b851fbb109aa83cbfc.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="d35cab367dbc001c05b2c7abe21106cb">

        <link data-pjax-transient rel='permalink' href='/briancherne/jquery-hoverIntent/blob/50f11356f87c96097b48879c1aa1cd994d9599b2/jquery.hoverIntent.js'>
    <meta property="og:title" content="jquery-hoverIntent"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/briancherne/jquery-hoverIntent"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/929edc86c57daa9adb9f051e1daa2d43?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery-hoverIntent - hoverIntent jQuery Plug-in"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="briancherne/jquery-hoverIntent"/>

    <meta name="description" content="jquery-hoverIntent - hoverIntent jQuery Plug-in" />


    <meta content="175717" name="octolytics-dimension-user_id" /><meta content="1089489" name="octolytics-dimension-repository_id" />
  <link href="https://github.com/briancherne/jquery-hoverIntent/commits/master.atom" rel="alternate" title="Recent Commits to jquery-hoverIntent:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="https://github.com/signup">Sign up</a>
      <a class="button" href="https://github.com/login?return_to=%2Fbriancherne%2Fjquery-hoverIntent%2Fblob%2Fmaster%2Fjquery.hoverIntent.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="briancherne/jquery-hoverIntent"
      data-branch="master"
      data-sha="6480e395efbd3fc3714e0a839bace260f7a22900"
  >

    <input type="hidden" name="nwo" value="briancherne/jquery-hoverIntent" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fbriancherne%2Fjquery-hoverIntent"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/briancherne/jquery-hoverIntent/stargazers">
        130
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fbriancherne%2Fjquery-hoverIntent"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/briancherne/jquery-hoverIntent/network" class="social-count">
        42
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/briancherne" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">briancherne</span>
                  </a></span> /
                <strong><a href="/briancherne/jquery-hoverIntent" class="js-current-repository">jquery-hoverIntent</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/briancherne/jquery-hoverIntent/pulse" class="js-selected-navigation-item " data-selected-links="pulse /briancherne/jquery-hoverIntent/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/briancherne/jquery-hoverIntent" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /briancherne/jquery-hoverIntent">Code</a></li>
    <li><a href="/briancherne/jquery-hoverIntent/network" class="js-selected-navigation-item " data-selected-links="repo_network /briancherne/jquery-hoverIntent/network">Network</a></li>
    <li><a href="/briancherne/jquery-hoverIntent/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /briancherne/jquery-hoverIntent/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/briancherne/jquery-hoverIntent/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /briancherne/jquery-hoverIntent/issues">Issues <span class='counter'>2</span></a></li>

      <li><a href="/briancherne/jquery-hoverIntent/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /briancherne/jquery-hoverIntent/wiki">Wiki</a></li>


    <li><a href="/briancherne/jquery-hoverIntent/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /briancherne/jquery-hoverIntent/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/briancherne/jquery-hoverIntent/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /briancherne/jquery-hoverIntent/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/briancherne/jquery-hoverIntent/blob/master/jquery.hoverIntent.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/briancherne/jquery-hoverIntent" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /briancherne/jquery-hoverIntent">Files</a></li>
    <li><a href="/briancherne/jquery-hoverIntent/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /briancherne/jquery-hoverIntent/commits/master">Commits</a></li>
    <li><a href="/briancherne/jquery-hoverIntent/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /briancherne/jquery-hoverIntent/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:76a62f6c76c826bc2a2f6515cf565c5f -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:76a62f6c76c826bc2a2f6515cf565c5f -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/briancherne/jquery-hoverIntent" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery-hoverIntent</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.hoverIntent.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery.hoverIntent.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/briancherne/jquery-hoverIntent/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/629fa905b76d5e22210586cec7a98825?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/nschonni" rel="author">nschonni</a></span>
    <time class="js-relative-date" datetime="2013-03-13T12:25:21-07:00" title="2013-03-13 12:25:21">March 13, 2013</time>
    <div class="commit-title">
        <a href="/briancherne/jquery-hoverIntent/commit/707e6ef6fb71c6b023b7221f668b54916546217f" class="message">Changed license block to minimal version</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="briancherne" href="/briancherne/jquery-hoverIntent/commits/master/jquery.hoverIntent.js?author=briancherne"><img height="20" src="https://secure.gravatar.com/avatar/929edc86c57daa9adb9f051e1daa2d43?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nschonni" href="/briancherne/jquery-hoverIntent/commits/master/jquery.hoverIntent.js?author=nschonni"><img height="20" src="https://secure.gravatar.com/avatar/629fa905b76d5e22210586cec7a98825?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/929edc86c57daa9adb9f051e1daa2d43?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/briancherne">briancherne</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/629fa905b76d5e22210586cec7a98825?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nschonni">nschonni</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/briancherne/jquery-hoverIntent/blob/50f11356f87c96097b48879c1aa1cd994d9599b2/jquery.hoverIntent.js" data-title="jquery-hoverIntent/jquery.hoverIntent.js at master · briancherne/jquery-hoverIntent · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>116 lines (103 sloc)</span>
                <span>4.944 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/briancherne/jquery-hoverIntent/raw/master/jquery.hoverIntent.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/briancherne/jquery-hoverIntent/blame/master/jquery.hoverIntent.js" class="button minibutton ">Blame</a>
                  <a href="/briancherne/jquery-hoverIntent/commits/master/jquery.hoverIntent.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+</span></div><div class='line' id='LC3'><span class="cm"> * http://cherne.net/brian/resources/jquery.hoverIntent.html</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * You may use hoverIntent under the terms of the MIT license. Basically that</span></div><div class='line' id='LC6'><span class="cm"> * means you are free to use hoverIntent as long as this header is left intact.</span></div><div class='line' id='LC7'><span class="cm"> * Copyright 2007, 2013 Brian Cherne</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'>&nbsp;</div><div class='line' id='LC10'><span class="cm">/* hoverIntent is similar to jQuery&#39;s built-in &quot;hover&quot; method except that</span></div><div class='line' id='LC11'><span class="cm"> * instead of firing the handlerIn function immediately, hoverIntent checks</span></div><div class='line' id='LC12'><span class="cm"> * to see if the user&#39;s mouse has slowed down (beneath the sensitivity</span></div><div class='line' id='LC13'><span class="cm"> * threshold) before firing the event. The handlerOut function is only</span></div><div class='line' id='LC14'><span class="cm"> * called after a matching handlerIn.</span></div><div class='line' id='LC15'><span class="cm"> *</span></div><div class='line' id='LC16'><span class="cm"> * // basic usage ... just like .hover()</span></div><div class='line' id='LC17'><span class="cm"> * .hoverIntent( handlerIn, handlerOut )</span></div><div class='line' id='LC18'><span class="cm"> * .hoverIntent( handlerInOut )</span></div><div class='line' id='LC19'><span class="cm"> *</span></div><div class='line' id='LC20'><span class="cm"> * // basic usage ... with event delegation!</span></div><div class='line' id='LC21'><span class="cm"> * .hoverIntent( handlerIn, handlerOut, selector )</span></div><div class='line' id='LC22'><span class="cm"> * .hoverIntent( handlerInOut, selector )</span></div><div class='line' id='LC23'><span class="cm"> *</span></div><div class='line' id='LC24'><span class="cm"> * // using a basic configuration object</span></div><div class='line' id='LC25'><span class="cm"> * .hoverIntent( config )</span></div><div class='line' id='LC26'><span class="cm"> *</span></div><div class='line' id='LC27'><span class="cm"> * @param  handlerIn   function OR configuration object</span></div><div class='line' id='LC28'><span class="cm"> * @param  handlerOut  function OR selector for delegation OR undefined</span></div><div class='line' id='LC29'><span class="cm"> * @param  selector    selector OR undefined</span></div><div class='line' id='LC30'><span class="cm"> * @author Brian Cherne &lt;brian(at)cherne(dot)net&gt;</span></div><div class='line' id='LC31'><span class="cm"> */</span></div><div class='line' id='LC32'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">hoverIntent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">handlerIn</span><span class="p">,</span><span class="nx">handlerOut</span><span class="p">,</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// default configuration values</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cfg</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">interval</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sensitivity</span><span class="o">:</span> <span class="mi">7</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span><span class="o">:</span> <span class="mi">0</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">handlerIn</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cfg</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">cfg</span><span class="p">,</span> <span class="nx">handlerIn</span> <span class="p">);</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">handlerOut</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cfg</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">cfg</span><span class="p">,</span> <span class="p">{</span> <span class="nx">over</span><span class="o">:</span> <span class="nx">handlerIn</span><span class="p">,</span> <span class="nx">out</span><span class="o">:</span> <span class="nx">handlerOut</span><span class="p">,</span> <span class="nx">selector</span><span class="o">:</span> <span class="nx">selector</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cfg</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">cfg</span><span class="p">,</span> <span class="p">{</span> <span class="nx">over</span><span class="o">:</span> <span class="nx">handlerIn</span><span class="p">,</span> <span class="nx">out</span><span class="o">:</span> <span class="nx">handlerIn</span><span class="p">,</span> <span class="nx">selector</span><span class="o">:</span> <span class="nx">handlerOut</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// instantiate variables</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// cX, cY = current X and Y position of mouse, updated by mousemove event</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cX</span><span class="p">,</span> <span class="nx">cY</span><span class="p">,</span> <span class="nx">pX</span><span class="p">,</span> <span class="nx">pY</span><span class="p">;</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A private function for getting mouse position</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">track</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ev</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cX</span> <span class="o">=</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cY</span> <span class="o">=</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A private function for comparing current and previous mouse position</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">compare</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ev</span><span class="p">,</span><span class="nx">ob</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span> <span class="o">=</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span><span class="p">);</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// compare mouse positions to see if they&#39;ve crossed the threshold</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="p">(</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">pX</span><span class="o">-</span><span class="nx">cX</span><span class="p">)</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">pY</span><span class="o">-</span><span class="nx">cY</span><span class="p">)</span> <span class="p">)</span> <span class="o">&lt;</span> <span class="nx">cfg</span><span class="p">.</span><span class="nx">sensitivity</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">ob</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;mousemove.hoverIntent&quot;</span><span class="p">,</span><span class="nx">track</span><span class="p">);</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set hoverIntent state to true (so mouseOut can be called)</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_s</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">cfg</span><span class="p">.</span><span class="nx">over</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">ob</span><span class="p">,[</span><span class="nx">ev</span><span class="p">]);</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set previous coordinates for next time</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pX</span> <span class="o">=</span> <span class="nx">cX</span><span class="p">;</span> <span class="nx">pY</span> <span class="o">=</span> <span class="nx">cY</span><span class="p">;</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span> <span class="kd">function</span><span class="p">(){</span><span class="nx">compare</span><span class="p">(</span><span class="nx">ev</span><span class="p">,</span> <span class="nx">ob</span><span class="p">);}</span> <span class="p">,</span> <span class="nx">cfg</span><span class="p">.</span><span class="nx">interval</span> <span class="p">);</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A private function for delaying the mouseOut function</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">delay</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ev</span><span class="p">,</span><span class="nx">ob</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span> <span class="o">=</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span><span class="p">);</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_s</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">cfg</span><span class="p">.</span><span class="nx">out</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">ob</span><span class="p">,[</span><span class="nx">ev</span><span class="p">]);</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A private function for handling mouse &#39;hovering&#39;</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">handleHover</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// copy objects to be passed into t (required for event object to be passed in IE)</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ev</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ob</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// cancel hoverIntent timer if it exists</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span> <span class="o">=</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if e.type == &quot;mouseenter&quot;</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s2">&quot;mouseenter&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set &quot;previous&quot; X and Y position based on initial entry point</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pX</span> <span class="o">=</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">pageX</span><span class="p">;</span> <span class="nx">pY</span> <span class="o">=</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// update &quot;current&quot; X and Y position based on mousemove</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">ob</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;mousemove.hoverIntent&quot;</span><span class="p">,</span><span class="nx">track</span><span class="p">);</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// start polling interval (self-calling timeout) to compare mouse coordinates over time</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_s</span> <span class="o">!=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span> <span class="kd">function</span><span class="p">(){</span><span class="nx">compare</span><span class="p">(</span><span class="nx">ev</span><span class="p">,</span><span class="nx">ob</span><span class="p">);}</span> <span class="p">,</span> <span class="nx">cfg</span><span class="p">.</span><span class="nx">interval</span> <span class="p">);}</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// else e.type == &quot;mouseleave&quot;</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// unbind expensive mousemove event</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">ob</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;mousemove.hoverIntent&quot;</span><span class="p">,</span><span class="nx">track</span><span class="p">);</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if hoverIntent state is true, then call the mouseOut function after the specified delay</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_s</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="nx">ob</span><span class="p">.</span><span class="nx">hoverIntent_t</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span> <span class="kd">function</span><span class="p">(){</span><span class="nx">delay</span><span class="p">(</span><span class="nx">ev</span><span class="p">,</span><span class="nx">ob</span><span class="p">);}</span> <span class="p">,</span> <span class="nx">cfg</span><span class="p">.</span><span class="nx">timeout</span> <span class="p">);}</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// listen for mouseenter and mouseleave</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">({</span><span class="s1">&#39;mouseenter.hoverIntent&#39;</span><span class="o">:</span><span class="nx">handleHover</span><span class="p">,</span><span class="s1">&#39;mouseleave.hoverIntent&#39;</span><span class="o">:</span><span class="nx">handleHover</span><span class="p">},</span> <span class="nx">cfg</span><span class="p">.</span><span class="nx">selector</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC115'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="https://github.com/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04034s from fe16.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/briancherne/jquery-hoverIntent/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04075' data-host='fe16'></span>
    
  </body>
</html>

