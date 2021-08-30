---
title: 4. Remote Control (SSH)
description: Lorum ipsum sit dolor amet
video: https://www.youtube.com/embed/symTv3m3XfU
previous: lesson-3
---

<script>
    import {Banner} from '$lib/components';
    import {base} from '$app/paths';
</script>

<Banner {...META}>
    This lesson goes over how to control your RPi over your wireless network. Sometimes it's convenient to control your RPi over wireless internet so you can use a normal laptop or a smartphone instead of an external monitor. It's possible to control the RPi wirelessly using a technique called **secure shell** (or SSH for short). This technique uses the command line, so it's a little bit tricky. It's also very powerful and useful!

    * A [Raspberry Pi computer]() set up according to [Lesson 1]({base}/modules/lesson-1)
    * A wireless internet connection (it's okay if the internet access is slow; we don't need to download anything)
    * A second device connected to the wireless internet (other than your RPi; ideally another computer but a smartphone works too)

    Once you have all those things, you should be ready to go! In this lesson, you'll learn how to:

    * Give your Raspberry Pi computer a host name
    * Connect to your RPi over SSH using another device
    * Control your RPi using basic terminal (command line) commands

</Banner>