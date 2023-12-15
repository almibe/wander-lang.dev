---
layout: Main.mustache
title: The Wander Programming Language
---
<header>
	<h1>Wander,</h1>
	<h2>programming in the smol</h2>
</header>
<main>
	<section class="alert">
		<h3>Status</h3>
		<p>
			Work on Wander is still in early days.
			Expect drastic changes still and some differences between this document and implementations for the time being.
			That said a working prototype is available for use.
		</p>
	</section>
	<section class="hello">
		<h3>Hello!</h3>
		<p>Wander is a programming language designed for extending applications.
		Its main use case is to be used as a library by another application (or even another library)
		instead of being used to compile to native code or bytecode like Wasm or the JVM or
		be ran as a script directly like Ruby or Python usually are.</p>
		<p>It does this by focusing on several areas:</p>
		<ul>
			<li>Embeddability, Wander is intended to be ran from inside of another program, this is the main use case for the language</li>
			<li>Size, Wander has a small core that is designed to be flexible, this also helps with embedding both in terms of physical size and ease of interfacing with other programming languages</li>
			<li>Portability, Wander already partially supports being integrated into projects using Rust, JVM, .NET, JS, or Wasm</li>
			<li>Dynamicity, Wander tries to combine it's type system with runtime dynamicity in a way that is productive and will help catch common errors</li>
			<li>Usability, Wander tries to lower as many barriers to entry for beginners while allowing experienced users a familar toolset</li>
		</ul>
	</section>
	<section class="links">
		<h3>External Links</h3>
		<ul>
			<li><a href="https://github.com/almibe/ligature-fs/src/wander">F# Implementation Code Repository</a></li>
			<li><a href="https://github.com/almibe/wander">Rust Implementation Code Repository</a></li>
			<li><a href="https://github.com/almibe/ligature-scala/wander">Scala Implementation Code Repository</a></li>
			<li><a href="https://github.com/almibe/wander-components">Web components for working with Wander.</a></li>
			<li><a href="https://github.com/almibe/wander-vscode">VSCode plugin for Wander Repository</a></li>
		</ul>
	</section>
</main>
